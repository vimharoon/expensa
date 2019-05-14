'use strict';
const bcrypt = require('bcrypt');
const moment = require('moment');
const mysql = require('./../util/mysql');
const authHelpers = require('./../util/authHelpers');

// helpers methods
const token = authHelpers.generateTokenSecret();
const expDate = moment().add(12, 'h').format('YYYY-MM-DD HH:mm:ss');

// register new user
const register = (clbk, data) => {
  authHelpers.checkMail(res => {
    if (res[0].email > 0) { // this email address already exists
      return clbk({
        error: true,
        status: 4091,
        message: 'Un compte avec le même adresse email existe déjà. veuillez ressaisir vos informations',
      });
    } else if (res[0].username > 0) {
      return clbk({
        error: true,
        status: 4092,
        message: 'Le nom d\'utilisateur existe déjà. veuillez ressaisir vos informations',
      });
    };
    // the database does not yet contain this email address, let's continue the insertion
    const hash = bcrypt.hashSync(data.password, 10);
    const q = `INSERT INTO
                  users (username, email, password, user_verif_token, token_exp_date)
              VALUES
                  (
                  ${mysql.escape(data.username)},
                  ${mysql.escape(data.email)},
                  ${mysql.escape(hash)},
                  ${mysql.escape(token)},
                  ${mysql.escape(expDate)}
                  )`;

    mysql.query(q, (error, results, fields) => {
      if (error) throw error;
      results.error = false;
      results.data = {
        token: token,
        email: data.email,
        username: data.username
      };
      results.message = 'vous êtes bien enregistré, veuillez confirmer votre adresse email pour vous connecter';
      clbk(results);
    });
  }, data.email, data.username);
};

// authenticate user
const authenticate = (clbk, data) => {
  authHelpers.comparePassword(data.email, res => {
    if (res.password) {
      bcrypt.compare(data.password, res.password, (error, result) => {
        if (result) {
          const q = `SELECT
                        user_id, username, email, avatar, created_at, is_verified, about, is_admin
                    FROM
                        users
                    WHERE
                        email = ${mysql.escape(data.email)}
                    AND
                        password = ${mysql.escape(res.password)} GROUP BY user_id`;

          mysql.query(q, (error, results, fields) => {
            if (error) throw error;

            const tmp = results[0] || results;

            res.user = tmp;
            res.error = false;
            delete res.password;
            if (!res.user.is_verified) {
              res.message = 'Veuillez valider votre compte avant de vous connecter';
            } else {
              res.message = 'Vous êtes maintenant connecté';
            }
            clbk(res);
          })
        } else {
          res.error = true;
          delete res.password;
          res.message = 'Votre email ou mot de passe est incorrecte';
          clbk(res);
        }
      });
    } else {
      clbk(res);
    }
  });
};

const forgotPassword = (clbk, data) => {
  authHelpers.getUserInfo(res => {
    if (!res.length) {
      return clbk({
        error: true,
        message: 'Cette adresse email n\'existe pas. veuillez verifier que votre email est correcte'
      });
    } else {
      const q = `UPDATE
                    users
                SET
                    password_reset_token = ${mysql.escape(token)},
                    token_exp_date = ${mysql.escape(expDate)}
                WHERE
                    user_id = ${mysql.escape(res[0].user_id)}`;

      mysql.query(q, (error, results, fields) => {
        if (error) throw error;
        clbk({
          error: false,
          data: {
            token: token,
            username: res[0].username,
            email: res[0].email
          },
          message: `Un mail vient de vous être envoyé à l\'adresse: ${res[0].email}`
        });
      })
    }
  }, data.email);
};

// add condition for password reset
const verifyToken = (clbk, data) => {
  const todayDate = moment().format('YYYY-MM-DD HH:mm:ss');
  let q;
  if (data.passwordToken) {
    q = `SELECT * FROM
            users
        WHERE
            password_reset_token = ${mysql.escape(data.token)}
        AND
            token_exp_date >= ${mysql.escape(todayDate)}`;
  } else {
    q = `SELECT * FROM
            users
        WHERE
            user_verif_token = ${mysql.escape(data.token)}
        AND
            token_exp_date >= ${mysql.escape(todayDate)}`;
  }

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;

    if (!results.length) {
      return clbk({
        message: 'Le token n\'est pas valide'
      });
    } else {
      q = `UPDATE users SET
              is_verified = ${mysql.escape(true)},
              password_reset_token = ${mysql.escape(null)},
              user_verif_token = ${mysql.escape(null)},
              token_exp_date = ${mysql.escape(null)}
          WHERE user_id = ${mysql.escape(results[0].user_id)}`;
      mysql.query(q, (error, res, fields) => {
        if (error) throw error;
        res.message = 'Compte activée avec succès';
        clbk(res);
      });
    }
  });
};

module.exports = {
  register,
  authenticate,
  forgotPassword,
  verifyToken,
};

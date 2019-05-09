'use strict';
const bcrypt = require('bcrypt');
const mysql = require('./../util/mysql');
const authHelpers = require('./../util/authHelpers');

// register new user
const register = (clbk, data) => {
  authHelpers.checkMail(res => {
    if (res[0].count > 0) {
      // this email address already exists
      return clbk({
        error: true,
        message:
          'Un compte avec le même adresse email existe déjà. veuillez ressaisir vos informations',
      });
    };
    // the database does not yet contain this email address, let's continue the insertion
    const hash = bcrypt.hashSync(data.password, 10);
    const q = `INSERT INTO
                  users (username, email, password)
              VALUES
                  (
                  ${mysql.escape(data.username)},
                  ${mysql.escape(data.email)},
                  ${mysql.escape(hash)}
                  )`;

    mysql.query(q, (error, results, fields) => {
      if (error) throw error;
      results.error = false;
      results.message = 'vous êtes bien enregistré, veuillez confirmer votre adresse email pour vous connecter.';
      clbk(results);
    });
  }, data.email, mysql);
};

// authenticate user
const authenticate = (clbk, data) => {
  authHelpers.comparePassword(mysql, data.email, res => {
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
            res.message = 'Vous êtes maintenant connecté';
            clbk(res);
          })
        } else {
          res.error = true;
          delete res.password;
          res.message = 'Votre email ou mot de passe est invalid';
          clbk(res);
        }
      });
    } else {
      clbk(res);
    }
  });
};

module.exports = {
  register,
  authenticate,
};

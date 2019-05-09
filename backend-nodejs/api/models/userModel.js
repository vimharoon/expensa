'use strict';
const bcrypt = require('bcrypt');
const mysql = require('./../util/mysql');

const getUsers = (clbk, id) => {
  let q;

  if (id) {
    q = `SELECT
            user_id, username, email, avatar, created_at, is_verified, about, is_admin
        FROM
            users
        WHERE
            user_id = ${mysql.escape(id)}`;
  } else {
    q = `SELECT
            user_id, username, email, avatar, created_at, is_verified, about, is_admin
        FROM
            users`;
  }

  mysql.query(q, (error, results, fields) => {
    if (error) throw error; // in case of query error, an exception is thrown
    clbk(results); // result is send in calback
  });
};

const removeUser = (clbk, id) => {
  const q = `DELETE FROM users WHERE user_id = ${mysql.escape(id)}`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;
    results.error = false;
    results.message = "Votre compte a été supprimé avec succès";
    clbk(results);
  });
};

const updateUser = (clbk, data) => {
  const q = `UPDATE
                users
            SET
                username = ${mysql.escape(data.username)},
                email = ${mysql.escape(data.email)}
            WHERE
                user_id = ${mysql.escape(data.user_id)}`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;
    results.message = "Modification effectuée avec succès !";
    clbk(results);
  });
};

const patchAbout = (clbk, data, id) => {
  const q = `UPDATE
                users
            SET
                about = ${mysql.escape(data.about)}
            WHERE
                user_id = ${mysql.escape(id)}`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;
    clbk(results);
  });
};

const patchUserPassword = (clbk, data) => {
  const hash = bcrypt.hashSync(data.password, 10);
  const q = `UPDATE
                users
            SET
                password = ${mysql.escape(hash)}
            WHERE
                user_id = ${mysql.escape(data.user_id)}`;

  mysql.query(q, (error, results, fields) => {
  if (error) throw error;
  results.message = 'Votre mot de passe a été modifié avec succès';
  clbk(results);
  });
};

const patchAvatar = (clbk, avatar, id) => {
  const q = `UPDATE
                users
            SET
                avatar = ${mysql.escape(avatar)}
            WHERE
                user_id = ${mysql.escape(id)}`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;
    results.message = 'Profil mise à jour avec succès';
    clbk(results);
  });
};

module.exports = {
  getUsers,
  updateUser,
  patch: {
    about: patchAbout,
    avatar: patchAvatar,
    password: patchUserPassword,
  },
  removeUser,
};

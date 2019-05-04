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
            id = ${mysql.escape(id)}`;
  } else {
    q = `SELECT
            user_id, username, email, avatar, created_at, is_verified, about, is_admin
        FROM
            users`;
  }

  mysql.query(q, (error, results, fields) => {
    if (error) throw error; // in case of query error, an exception is thrown
    clbk(results);
  });
};

module.exports = {
  getUsers
};

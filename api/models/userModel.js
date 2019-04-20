'use strict';
const bcrypt = require('bcrypt');
const mysql = require('./../util/mysql');

const getUsers = (clbk, id) => {
  let q;

  if (id) {
    q = `SELECT
            id, username, email, avatar, created_at, about, is_admin
        FROM
            users
        WHERE
            id = ${mysql.escape(id)}`;
  } else {
    q = `SELECT
            id, username, email, avatar, created_at, about, is_admin
        FROM
            users`;
  }

  mysql.query(q, (error, results, fields) => {
    if (error) throw Boom.badRequest(error);; // in case of query error, an an exception is thrown
    clbk(results);
  });
};

module.exports = {
  getUsers
};

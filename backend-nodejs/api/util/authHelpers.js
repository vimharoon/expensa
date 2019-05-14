'use strict';
const crypto = require('crypto');
const mysql = require('./../util/mysql');

// Helper method for validating user's password
const comparePassword = (email, clbk) => {
  const q = `SELECT * FROM users WHERE email = ${mysql.escape(email)}`;
  mysql.query(q, (error, results, fields) => {
    if (error) throw error;

    const tmp = results[0] || results;
    const resp = {};

    if (Array.isArray(tmp) && !tmp.length) {
      resp.error = true;
      resp.message = 'Votre email ou mot de passe est invalid';
    } else {
      resp.password = tmp.password;
      resp.error = true;
    }
    clbk(resp);
  });
};

// helper methode to check if user email exist in db
const checkMail = (clbk, email, username) => {
  const q = `SELECT * FROM
            (   SELECT
                      COUNT(email) AS email
                FROM
                      users
                  WHERE
                      email = ${mysql.escape(email)}
            ) A,
            (   SELECT
                    COUNT(username) AS username
                FROM
                    users
                WHERE
                    username = ${mysql.escape(username)}
            ) B`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;
    clbk(results);
  });
};

const getUserInfo = (clbk, email) => {
  const q = `SELECT
                username, email
            FROM
                users
            WHERE
                email = ${mysql.escape(email)}`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;
    clbk(results);
  });
};

// helper methode to create a rendom token
const generateTokenSecret = () => {
  return crypto.randomBytes(20).toString('hex');
};

module.exports = {
  generateTokenSecret,
  comparePassword,
  checkMail,
  getUserInfo,
};

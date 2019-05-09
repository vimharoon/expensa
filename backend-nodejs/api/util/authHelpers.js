'use strict';
const crypto = require('crypto');

// Helper method for validating user's password
const comparePassword = (mysql, email, clbk) => {
  const q = `SELECT * FROM users WHERE email = ${mysql.escape(email)}`;
  mysql.query(q, (error, results, fields) => {
    if (error) throw error;

    const tmp = results[0] || results;
    const resp = {};

    if (Array.isArray(tmp) && !tmp.length) {
      resp.error = true;
      resp.message = 'Votre email ou mot-de-passe est invalid';
    } else {
      resp.password = tmp.password;
      resp.error = true;
    }
    clbk(resp);
  });
};

// helper methode to check if user email exist in db
const checkMail = (clbk, email, mysql) => {
  const q = `SELECT
                COUNT(*) as count
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
  return crypto.randomBytes(16).toString('hex');
};

module.exports = {
  generateTokenSecret,
  comparePassword,
  checkMail,
};

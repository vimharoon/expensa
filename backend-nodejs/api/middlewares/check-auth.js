'use strict';
const jwt = require('jsonwebtoken');

// create middleware and export them
module.exports = (req, res, next) => {
    // decode created token for users
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.PUBLIC_KEY.replace(/\\n/g, '\n'), { algorithm: ['RS256'] });
        req.userData = decoded;
        next();
    } catch (error) {
      return res.boom.forbidden('invalid token');
    }
};

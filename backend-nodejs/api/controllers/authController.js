'use strict';
const jwt = require('jsonwebtoken');
const authModel = require('./../models/authModel');
const mailService = require('./../util/email');

// register new user
const registerUser = (req, res) => {
  try {
    authModel.register(response => {
      res.status(201).send(response);
    }, req.body);
  } catch(err) {
    res.boom.badImplementation('Une erreur est survenue lors de la création');
  }
};

// authenticate use with credentials and respond with signed jwt token
const authenticateUser = (req, res) => {
  if (!req.body) {
    return res.boom.badImplementation('Access non autorisé au serveur');
  }

  authModel.authenticate(response => {
      if (!response.error) {
        const payload = { user: response.user, message: response.message };
        const token = jwt.sign(payload, process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), { expiresIn: '2 days', algorithm: 'RS256' }); // expires in 24 hours
        response.token = token;
        // response.expires = moment(moment().add(2, 'd')).format("x");
        return res.status(201).send(response);
      } else {
        res.boom.unauthorized(response.message);
      }
  }, req.body);
};

// confirm account token
const confirmAccount = (req, res) => {
  res.status(201).send({
    message: 'confirm account token',
    data: req.body
  });
};

// resend confirm token
const resendConfirmToken = (req, res) => {
  res.status(201).send({
    message: 'resend confirm token',
    data: req.body
  });
};

// forgot password
const forgotPassword = (req, res) => {
  res.status(201).send({
    message: 'forgot password',
    data: req.body
  });
};

module.exports = {
  registerUser,
  authenticateUser,
  confirmAccount,
  resendConfirmToken,
  forgotPassword,
};

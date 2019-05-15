'use strict';
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');

// import model and mailService helper
const authModel = require('./../models/authModel');
const mailService = require('./../util/email');
const inputValidation = require('./../middlewares/input-validation');

// register new user
const registerUser = (req, res) => {
  Joi.validate(req.body, inputValidation.registerUserSchema, (err, values) => {
    if (err === null) {
      authModel.register(response => {
        if (response.status === 4091) {
          return res.boom.conflict(response.message);
        } else if (response.status === 4092) {
          return res.boom.conflict(response.message);
        }
        mailService.welcomeMail(response.data.email, response.data.username, response.data.token);
        delete response.data;
        res.status(201).send(response);
      }, values);
    } else {
      res.boom.conflict(err);
    }
  });
};

// authenticate use with credentials and respond with signed jwt token
const authenticateUser = (req, res) => {
  Joi.validate(req.body, inputValidation.authenticateUserSchema, (err, values) => {
    if (err === null) {
      authModel.authenticate(response => {
        if (!response.error && response.user.is_verified) {
          delete response.error;
          const payload = { user: response.user, message: response.message };
          const token = jwt.sign(payload, process.env.PRIVATE_KEY.replace(/\\n/g, '\n'), { expiresIn: '2 days', algorithm: 'RS256' }); // expires in 24 hours
          response.token = token;
          // response.expires = moment(moment().add(2, 'd')).format("x");
          return res.status(201).send(response);
        } else {
          res.boom.unauthorized(response.message);
        }
      }, values);
    } else {
      res.boom.conflict(err);
    }
  });
};

// confirm account token
const confirmUserToken = (req, res) => {
  Joi.validate(req.body, inputValidation.tokenSchema, (err, values) => {
    if (err === null) {
      authModel.verifyToken(response => {
        res.status(201).send(response);
      }, values);
    } else {
      res.boom.conflict(err);
    }
  });
};

// resend confirm token
const resendConfirmToken = (req, res) => {
  Joi.validate(req.body, inputValidation.forgotPasswordSchema, (err, values) => {
    if (err === null) {
      res.status(201).send({
        message: 'resend confirm token',
        data: req.body
      });
    } else {
      res.boom.conflict(err);
    }
  });
};

// forgot password
const forgotPassword = (req, res) => {
  Joi.validate(req.body, inputValidation.forgotPasswordSchema, (err, values) => {
    if (err === null) {
      authModel.forgotPassword(response => {
        if (!response.error) {
          mailService.resetPassword(response.data.email, response.data.username, response.data.token);
          delete response.data;
          res.status(201).send(response);
        } else {
          res.boom.conflict(response.message);
        }
      }, values);
    } else {
      res.boom.conflict(err);
    }
  });
};

module.exports = {
  registerUser,
  authenticateUser,
  confirmUserToken,
  resendConfirmToken,
  forgotPassword,
};

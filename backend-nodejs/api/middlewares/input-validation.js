'use strict';
const Joi = require('@hapi/joi');

/********************************************
 * USER INPUT VALIDATION SCHEMAS
 ********************************************/
const registerUserSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(20).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
});

const authenticateUserSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
});

const forgotPasswordSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2 }).required()
});

const tokenSchema = Joi.object().keys({
  token: [Joi.string(), Joi.number()]
});

module.exports = {
  registerUserSchema,
  authenticateUserSchema,
  forgotPasswordSchema,
  tokenSchema,
};

'use strict';
const Joi = require('@hapi/joi');

/********************************************
 * AUTHENTICATION INPUT VALIDATION SCHEMAS
 ********************************************/
const registerUserSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(20).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
});

const authenticateUserSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
});

const forgotPasswordSchema = Joi.object().keys({
  email: Joi.string().email({ minDomainSegments: 2 }).required()
});

const tokenSchema = Joi.object().keys({
  token: [Joi.string(), Joi.number()]
});

/********************************************
 * USER INPUT VALIDATION SCHEMAS
 ********************************************/
const idValidationSchema = Joi.object().keys({
  id: Joi.number().positive().integer().required()
});

const updateUserSchema = Joi.object().keys({
  user_id: Joi.number().positive().integer().required(),
  username: Joi.string().alphanum().min(3).max(20).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required()
});

const passwordUpdateSchema = Joi.object().keys({
  user_id: Joi.number().positive().integer().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required()
});

const updateAboutSchema = Joi.object().keys({
  about: Joi.string().alphanum().min(5).max(255).required()
});

/********************************************
 * TRANSACTIONS INPUT VALIDATION SCHEMAS
 ********************************************/
const transactionsSchema = Joi.object().keys({
  transactionType: Joi.string().alphanum().min(3).max(20).required(),
  transactionDate: Joi.date().timestamp('unix'),
  transactionAmount: Joi.number().positive().precision(2).required(),
  transactionDescription: Joi.string().alphanum().min(5).max(255).required(),
  user_id: Joi.number().positive().integer().required(),
  transaction_category_id: Joi.number().positive().required()
});

/********************************************
 * TASKS INPUT VALIDATION SCHEMAS
 ********************************************/
const createTasksSchema = Joi.object().keys({
  taskName: Joi.string().alphanum().min(5).max(255).required(),
  taskDescription: Joi.string().alphanum().min(5).max(255)
});

const updateTasksSchema = Joi.object().keys({
  taskName: Joi.string().alphanum().min(5).max(255).required(),
  taskDescription: Joi.string().alphanum().min(5).max(255),
  taskDate: Joi.date().timestamp('unix'),
  taskDone: Joi.number().positive().integer()
});

module.exports = {
  // auth validation
  registerUserSchema,
  authenticateUserSchema,
  forgotPasswordSchema,
  tokenSchema,
  // user validation
  idValidationSchema,
  updateUserSchema,
  passwordUpdateSchema,
  updateAboutSchema,
  // transaction validation
  transactionsSchema,
  // tasks validation
  createTasksSchema,
  updateTasksSchema,
};

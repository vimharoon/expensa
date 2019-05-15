'use strict';
const Joi = require('@hapi/joi');
const taskModel = require('./../models/tasksModel');
const inputValidation = require('./../middlewares/input-validation');

// get all tasks
const getTasks = (req, res) => {
  Joi.validate(req.params, inputValidation.idValidationSchema, (err, values) => {
    if (err === null) {
      taskModel.getTasks(response => {
        res.status(200).send(response);
      }, req.userData.user.user_id);
    } else {
      res.boom.conflict(err);
    }
  });
};

// create a new task
const createTask = (req, res) => {
  Joi.validate(req.body, inputValidation.createTasksSchema, (err, values) => {
    if (err === null) {
      taskModel.createTask(response => {
        res.status(201).send(response);
      }, values);
    } else {
      res.boom.conflict(err);
    }
  });
};

// update a task
const updateTask = (req, res) => {
  Joi.validate(req.body, inputValidation.updateTasksSchema, (err, values) => {
    if (err === null) {
      taskModel.updateTask(response => {
        res.status(201).send(response);
      }, values);
    } else {
      res.boom.conflict(err);
    }
  });
};

// remove a task
const removeTask = (req, res) => {
  Joi.validate(req.params, inputValidation.idValidationSchema, (err, values) => {
    if (err === null) {
      taskModel.removeTask(response => {
        res.status(201).send(response);
      }, values.id);
    } else {
      res.boom.conflict(err);
    }
  });
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  removeTask,
};
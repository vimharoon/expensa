'use strict';
const taskModel = require('./../models/tasksModel');

// get all tasks
const getTasks = (req, res) => {
  taskModel.getTasks(response => {
    res.status(200).send(response);
  }, req.userData.user.user_id);
};

// create a new task
const createTask = (req, res) => {
  taskModel.createTask(response => {
    res.status(201).send(response);
  }, req.body);
};

// update a task
const updateTask = (req, res) => {
  taskModel.updateTask(response => {
    res.status(201).send(response);
  }, req.body, req.params.id);
};

// remove a task
const removeTask = (req, res) => {
  taskModel.removeTask(response => {
    res.status(201).send(response);
  }, req.params.id);
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  removeTask,
};

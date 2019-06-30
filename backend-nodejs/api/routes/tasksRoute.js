'use strict';
const express = require('express');
const router = express.Router();

// import controller
const tasksController = require('./../controllers/tasksController');
const checkAuth = require('./../middlewares/check-auth');

// get tasks
router.get('/', checkAuth, tasksController.getTasks);

// create new task
router.post('/', checkAuth, tasksController.createTask);

// upate a task
router.put('/:id', checkAuth, tasksController.updateTask);

// patch a task
router.patch('/:id', checkAuth, tasksController.updateTaskStatus);

// delete a task
router.delete('/:id', checkAuth, tasksController.removeTask);

module.exports = router;

'use strict';
const express = require('express');
const router = express.Router();

// import controller
const tasksController = require('./../controllers/tasksController');
const checkAuth = require('./../middlewares/check-auth');

// get transactions
router.get('/:id', checkAuth, tasksController.getTasks);

// create new transaction
router.post('/', checkAuth, tasksController.createTask);

// upate a transaction
router.put('/:id', checkAuth, tasksController.updateTask);

// upate a transaction
router.delete('/:id', checkAuth, tasksController.removeTask);

module.exports = router;

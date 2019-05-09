'use strict';
const express = require('express');
const router = express.Router();

// import controller
const tasksController = require('./../controllers/tasksController');
const checkAuth = require('./../middlewares/check-auth');

// get transactions
router.get('/:user_id', tasksController.getTasks);

// create new transaction
router.post('/', tasksController.createTask);

// upate a transaction
router.put('/:id', tasksController.updateTask);

// upate a transaction
router.delete('/:id', tasksController.removeTask);

module.exports = router;

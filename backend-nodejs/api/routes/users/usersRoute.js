'use strict';
const express = require('express');
const router = express.Router();

// import controller
const usersController = require('./../../controllers/users/usersController');

// get all users
router.get('/', usersController.getUsers);

module.exports = router;

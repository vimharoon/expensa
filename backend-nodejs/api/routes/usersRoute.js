'use strict';
const express = require('express');
const router = express.Router();

// import controller
const usersController = require('./../controllers/usersController');
const checkAuth = require('./../middlewares/check-auth');

// get all users
router.get('/', usersController.getUsers);

// get user by id
router.get('/:id', usersController.getUserById);

// update user informations
router.put('/', usersController.updateUserInfo);

// patch user about informations
router.patch('/about/:id', usersController.updateUserAbout);

// patch user about informations
router.patch('/avatar/:id', usersController.updateUserAvatar);

// patch user about informations
router.patch('/password', usersController.updateUserPassword);

// delete user by id
router.delete('/:id', usersController.removeUser);

module.exports = router;

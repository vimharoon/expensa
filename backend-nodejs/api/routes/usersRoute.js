'use strict';
const express = require('express');
const router = express.Router();

// import controller
const usersController = require('./../controllers/usersController');
const checkAuth = require('./../middlewares/check-auth');

// get all users
router.get('/', checkAuth, usersController.getUsers);

// get user by id
router.get('/:id', checkAuth, usersController.getUserById);

// update user informations
router.put('/', checkAuth, usersController.updateUserInfo);

// patch user about informations
router.patch('/about/:id', checkAuth, usersController.updateUserAbout);

// patch user about informations
router.patch('/avatar/:id', checkAuth, usersController.updateUserAvatar);

// patch user about informations
router.patch('/password', checkAuth, usersController.updateUserPassword);

// delete user by id
router.delete('/:id', checkAuth, usersController.removeUser);

module.exports = router;

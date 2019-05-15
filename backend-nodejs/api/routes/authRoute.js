'use strict';
const express = require('express');
const router = express.Router();

// import controller
const authController = require('./../controllers/authController');

// register new user
router.post('/register', authController.registerUser);

// authenticate user
router.post('/authenticate', authController.authenticateUser);

// new account email confirmation
router.post('/confirm-account', authController.confirmUserToken);

// resend confirmation token
router.post('/resend-confirmation-token', authController.resendConfirmToken);

// forgot password
router.post('/forgot-password', authController.forgotPassword);

// reset password
router.post('/reset-password', authController.confirmUserToken);

module.exports = router;

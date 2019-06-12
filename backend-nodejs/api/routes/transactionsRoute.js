'use strict';
const express = require('express');
const router = express.Router();

// import controller
const transactionsController = require('./../controllers/transactionController');
const checkAuth = require('./../middlewares/check-auth');

// get transactions
router.get('/', checkAuth, transactionsController.getTransactions);

// create new transaction
router.post('/', checkAuth, transactionsController.createTransaction);

// upate a transaction
router.put('/:id', checkAuth, transactionsController.updateTransaction);

// upate a transaction
router.delete('/:id', checkAuth, transactionsController.removeTransaction);

module.exports = router;

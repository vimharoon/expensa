'use strict';
const express = require('express');
const router = express.Router();

// import controller
const transactionsController = require('./../controllers/transactionController');
const checkAuth = require('./../middlewares/check-auth');

// get transactions
router.get('/:user_id', transactionsController.getTransactions);

// create new transaction
router.post('/', transactionsController.createTransaction);

// upate a transaction
router.put('/:id', transactionsController.updateTransaction);

// upate a transaction
router.delete('/:id', transactionsController.removeTransaction);

module.exports = router;

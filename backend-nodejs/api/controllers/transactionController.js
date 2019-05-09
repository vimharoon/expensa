'use strict';
const transactionsModel = require('./../models/transactionsModel');

// get all transactions
const getTransactions = (req, res) => {
  transactionsModel.getTransactions(response => {
    res.status(200).send(response);
  }, req.params.user_id);
};

// create new transaction
const createTransaction = (req, res) => {
  transactionsModel.createTransaction(response => {
    res.status(201).send(response);
  }, req.body);
};

// update a transaction
const updateTransaction = (req, res) => {
  transactionsModel.updateTransaction(response => {
    res.status(201).send(response);
  }, req.body, req.params.id);
};

// remove a transaction
const removeTransaction = (req, res) => {
  transactionsModel.removeTransaction(response => {
    res.status(201).send(response);
  }, req.params.id);
};

module.exports = {
  getTransactions,
  createTransaction,
  updateTransaction,
  removeTransaction,
};

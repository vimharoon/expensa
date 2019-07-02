'use strict'
const Joi = require('@hapi/joi')
const transactionsModel = require('./../models/transactionsModel')
const inputValidation = require('./../middlewares/input-validation')

// get all transactions
const getTransactions = (req, res) => {
  transactionsModel.getTransactions(response => {
    res.status(200).send(response)
  }, req.userData.user.user_id)
}

// create new transaction
const createTransaction = (req, res) => {
  Joi.validate(req.body, inputValidation.transactionsSchema, (err, values) => {
    if (err === null) {
      transactionsModel.createTransaction(
        response => {
          res.status(201).send(response)
        },
        values,
        req.userData.user.user_id
      )
    } else {
      res.boom.conflict(err)
    }
  })
}

// update a transaction
const updateTransaction = (req, res) => {
  Joi.validate(req.body, inputValidation.transactionsSchema, (err, values) => {
    if (err === null) {
      transactionsModel.updateTransaction(
        response => {
          res.status(201).send(response)
        },
        values,
        req.params.id
      )
    } else {
      res.boom.conflict(err)
    }
  })
}

// remove a transaction
const removeTransaction = (req, res) => {
  Joi.validate(
    req.params,
    inputValidation.idValidationSchema,
    (err, values) => {
      if (err === null) {
        transactionsModel.removeTransaction(response => {
          res.status(201).send(response)
        }, values.id)
      } else {
        res.boom.conflict(err)
      }
    }
  )
}

const getTransactionsCategory = (req, res) => {
  transactionsModel.getTransactionsCategory(response => {
    res.status(200).send(response)
  })
}

module.exports = {
  getTransactions,
  createTransaction,
  updateTransaction,
  removeTransaction,
  getTransactionsCategory,
}

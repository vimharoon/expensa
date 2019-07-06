'use strict'
const Joi = require('@hapi/joi')
const moment = require('moment')
const kpisModel = require('./../models/kpisModel')
moment.locale('fr')

// get user transactions infos
const getTransactionsInfos = (req, res) => {
  kpisModel.getTransactionsInfos(response => {
    res.status(200).send(response)
  }, req.userData.user.user_id)
}

// get amount spend by category
const getExpensesByCategory = (req, res) => {
  kpisModel.expensesByCategory(response => {
    res.status(200).send(response)
  }, req.userData.user.user_id)
}

// get income per month
const getIncomePerMonth = (req, res) => {
  kpisModel.incomePerMonth(response => {
    res.status(200).send(response)
  }, req.userData.user.user_id)
}

const getMonthlyIncomeExpenses = (req, res) => {
  kpisModel.monthlyIncomeExpenses(response => {
    res.status(200).send(response)
  }, req.userData.user.user_id)
}

// get last 10 transactions
const getLastTransactions = (req, res) => {
  kpisModel.getLastTransactions(response => {
    res.status(200).send(response)
  }, req.userData.user.user_id)
}

module.exports = {
  getTransactionsInfos,
  getExpensesByCategory,
  getMonthlyIncomeExpenses,
  getIncomePerMonth,
  getLastTransactions,
}

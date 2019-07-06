'use strict'
const express = require('express')
const router = express.Router()

// import controller
const kpisController = require('./../controllers/kpisController')
const checkAuth = require('./../middlewares/check-auth')

// get transactions infos
router.get(
  '/transactions-infos',
  checkAuth,
  kpisController.getTransactionsInfos
)

// get amount spent by category
router.get(
  '/amount-by-category',
  checkAuth,
  kpisController.getExpensesByCategory
)

// get balance per month
router.get('/monthly-balance', checkAuth, kpisController.getIncomePerMonth)

// get income and expenses per month
router.get(
  '/monthly-income-expenses',
  checkAuth,
  kpisController.getMonthlyIncomeExpenses
)

// get last 10 transactions
router.get('/last-transactions', checkAuth, kpisController.getLastTransactions)

module.exports = router

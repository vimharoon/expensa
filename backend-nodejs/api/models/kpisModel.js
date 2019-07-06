'use strict'
const mysql = require('./../util/mysql')

// get user transactions infos
const getTransactionsInfos = (clbk, id) => {
  const q = `SELECT * FROM
              ( SELECT
                    SUM(transaction_amount) AS income
                FROM
                    transactions
                WHERE
                    transaction_type = 'income'
                AND
                    fk_user_id = ${mysql.escape(id)}
              ) A,
              ( SELECT
                    SUM(transaction_amount) AS expense
                FROM
                    transactions
                WHERE
                    transaction_type = 'expense'
                AND
                    fk_user_id = ${mysql.escape(id)}
              ) B,
              ( SELECT
                    COUNT(transaction_amount) AS transactions_number
                FROM
                    transactions
                WHERE
                    fk_user_id = ${mysql.escape(id)}
              ) C`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error // in case of query error, an exception is thrown
    clbk(results) // result is send in calback
  })
}

// get expenses by category and month
const expensesByCategory = (clbk, id) => {
  const q = `SELECT
                ROUND(SUM(t.transaction_amount), 2) AS expense,
                tc.transaction_category_name
            FROM
                transactions AS t
            LEFT JOIN
                transactions_category AS tc
            ON
                t.fk_transaction_category_id = tc.transaction_category_id
            WHERE
                t.transaction_type = 'expense'
            AND
                t.fk_user_id = ${mysql.escape(id)}
            GROUP BY
                tc.transaction_category_name`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error
    clbk(results)
  })
}

// get income per month
const incomePerMonth = (clbk, id) => {
  const q = `SELECT
                SUM(IF(month = 'Jan', total, 0)) AS 'Jan',
                SUM(IF(month = 'Feb', total, 0)) AS 'Feb',
                SUM(IF(month = 'Mar', total, 0)) AS 'Mar',
                SUM(IF(month = 'Apr', total, 0)) AS 'Apr',
                SUM(IF(month = 'May', total, 0)) AS 'May',
                SUM(IF(month = 'Jun', total, 0)) AS 'Jun',
                SUM(IF(month = 'Jul', total, 0)) AS 'Jul',
                SUM(IF(month = 'Aug', total, 0)) AS 'Aug',
                SUM(IF(month = 'Sep', total, 0)) AS 'Sep',
                SUM(IF(month = 'Oct', total, 0)) AS 'Oct',
                SUM(IF(month = 'Nov', total, 0)) AS 'Nov',
                SUM(IF(month = 'Dec', total, 0)) AS 'Dec'
            FROM (
                SELECT
                    DATE_FORMAT(transaction_date, '%b') AS month,
                    SUM(transaction_amount) AS total
                FROM
                    transactions
                WHERE
                    fk_user_id = ${mysql.escape(id)}
                AND
                    transaction_type = 'income'
                AND
                    transaction_date <= NOW()
                AND
                    transaction_date >= DATE_ADD(Now(),interval - 12 month)
                GROUP BY
                    DATE_FORMAT(transaction_date, '%b')
            ) AS sub`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error
    clbk(results)
  })
}

// get monthly income and expenses
const monthlyIncomeExpenses = (clbk, id) => {
  const q = `SELECT * FROM
              (
                SELECT
                    SUM(IF(month = 'Jan', total, 0)) AS 'Jan',
                    SUM(IF(month = 'Feb', total, 0)) AS 'Feb',
                    SUM(IF(month = 'Mar', total, 0)) AS 'Mar',
                    SUM(IF(month = 'Apr', total, 0)) AS 'Apr',
                    SUM(IF(month = 'May', total, 0)) AS 'May',
                    SUM(IF(month = 'Jun', total, 0)) AS 'Jun',
                    SUM(IF(month = 'Jul', total, 0)) AS 'Jul',
                    SUM(IF(month = 'Aug', total, 0)) AS 'Aug',
                    SUM(IF(month = 'Sep', total, 0)) AS 'Sep',
                    SUM(IF(month = 'Oct', total, 0)) AS 'Oct',
                    SUM(IF(month = 'Nov', total, 0)) AS 'Nov',
                    SUM(IF(month = 'Dec', total, 0)) AS 'Dec'
                FROM (
                    SELECT
                        DATE_FORMAT(transaction_date, '%b') AS month,
                        ROUND(SUM(transaction_amount), 2) AS total
                    FROM
                        transactions
                    WHERE
                        fk_user_id = ${mysql.escape(id)}
                    AND
                        transaction_type = 'income'
                    AND
                        transaction_date <= NOW()
                    AND
                        transaction_date >= DATE_ADD(Now(),interval - 12 month)
                    GROUP BY
                        DATE_FORMAT(transaction_date, '%b')
                ) AS income
              ) A
              UNION
              SELECT * FROM
              (
                SELECT
                    SUM(IF(month = 'Jan', total, 0)) AS 'Jan',
                    SUM(IF(month = 'Feb', total, 0)) AS 'Feb',
                    SUM(IF(month = 'Mar', total, 0)) AS 'Mar',
                    SUM(IF(month = 'Apr', total, 0)) AS 'Apr',
                    SUM(IF(month = 'May', total, 0)) AS 'May',
                    SUM(IF(month = 'Jun', total, 0)) AS 'Jun',
                    SUM(IF(month = 'Jul', total, 0)) AS 'Jul',
                    SUM(IF(month = 'Aug', total, 0)) AS 'Aug',
                    SUM(IF(month = 'Sep', total, 0)) AS 'Sep',
                    SUM(IF(month = 'Oct', total, 0)) AS 'Oct',
                    SUM(IF(month = 'Nov', total, 0)) AS 'Nov',
                    SUM(IF(month = 'Dec', total, 0)) AS 'Dec'
                FROM (
                    SELECT
                        DATE_FORMAT(transaction_date, '%b') AS month,
                        ROUND(SUM(transaction_amount), 2) AS total
                    FROM
                        transactions
                    WHERE
                        fk_user_id = ${mysql.escape(id)}
                    AND
                        transaction_type = 'expense'
                    AND
                        transaction_date <= NOW()
                    AND
                        transaction_date >= DATE_ADD(Now(),interval - 12 month)
                    GROUP BY
                        DATE_FORMAT(transaction_date, '%b')
                ) AS expense
              ) B`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error
    clbk(results)
  })
}

// get last 10 transactions per user
const getLastTransactions = (clbk, id) => {
  const q = `SELECT
                t.transaction_id, t.transaction_type, t.transaction_date, tc.transaction_category_name,
                t.transaction_amount, t.transaction_description, t.transaction_payment_mode
            FROM
                transactions AS t
            LEFT JOIN
                transactions_category AS tc
            ON
                t.fk_transaction_category_id = tc.transaction_category_id
            WHERE
                t.fk_user_id = ${mysql.escape(id)}
            ORDER BY t.transaction_id DESC LIMIT 10`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error
    clbk(results)
  })
}

module.exports = {
  getTransactionsInfos,
  expensesByCategory,
  monthlyIncomeExpenses,
  incomePerMonth,
  getLastTransactions,
}

'use strict';
const mysql = require('./../util/mysql');

// get all transactions
const getTransactions = (clbk, id) => {
  const q = `SELECT
                t.transaction_id, t.transaction_type, t.transaction_date,
                t.transaction_amount, t.transaction_description,
                tc.transaction_category_name
            FROM
                transactions AS t
            LEFT JOIN
                transactions_category AS tc
            ON
                t.fk_transaction_category_id = tc.transaction_category_id
            WHERE
                t.fk_user_id = ${mysql.escape(id)}`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error; // in case of query error, an exception is thrown
    clbk(results); // result is send in calback
  });
};

// create new transaction
const createTransaction = (clbk, data) => {
  const q = `INSERT INTO
                transactions (transaction_type, transaction_amount, transaction_description, fk_user_id, fk_transaction_category_id)
            VALUES
                (
                ${mysql.escape(data.transactionType)},
                ${mysql.escape(data.transactionAmount)},
                ${mysql.escape(data.transactionDescription)},
                ${mysql.escape(data.fk_user_id)},
                ${mysql.escape(data.fk_transaction_category_id)}
                )`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;
    results.message = "Transaction ajoutée avec succès";
    clbk(results);
  });
};

// update a transaction
const updateTransaction = (clbk, data, id) => {
  const q = `UPDATE
                transactions
            SET
                transaction_type = ${mysql.escape(data.transactionType)},
                transaction_date = ${mysql.escape(data.transactionDate)},
                transaction_amount = ${mysql.escape(data.transactionAmount)},
                transaction_description = ${mysql.escape(data.transactionDescription)},
                fk_transaction_category_id = ${mysql.escape(data.fk_transaction_category_id)}
            WHERE
                transaction_id = ${mysql.escape(id)}`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;
    results.message = "Transaction mise à jour avec succès";
    clbk(results);
  });
}

// remove a transaction
const removeTransaction = (clbk, id) => {
  const q = `DELETE FROM
                transactions
            WHERE
                transaction_id = ${mysql.escape(id)}`;

  mysql.query(q, (error, results, fields) => {
    if (error) throw error;
    results.message = "Transaction supprimée avec succès";
    clbk(results);
  });
}

module.exports = {
  getTransactions,
  createTransaction,
  updateTransaction,
  removeTransaction,
};

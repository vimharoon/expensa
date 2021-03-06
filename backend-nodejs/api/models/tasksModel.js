'use strict'
const moment = require('moment')
const mysql = require('./../util/mysql')

// get all tasks per user
const getTasks = (clbk, id) => {
  const q = `SELECT
                task_id, task_name, task_description, task_done, task_date
            FROM
                tasks
            WHERE
                fk_user_id = ${mysql.escape(id)}`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error // in case of query error, an exception is thrown
    clbk(results) // result is send in calback
  })
}

// create new task
const createTask = (clbk, data, id) => {
  const todayDate = moment().format('YYYY-MM-DD HH:mm:ss')
  console.log(todayDate)
  const q = `INSERT INTO
                tasks (task_name, task_description, task_date, fk_user_id)
            VALUES
                (
                ${mysql.escape(data.taskName)},
                ${mysql.escape(data.taskDescription)},
                ${mysql.escape(todayDate)},
                ${mysql.escape(id)}
                )`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error
    results.message = 'Tâche ajoutée avec succès'
    clbk(results)
  })
}

// update a task
const updateTask = (clbk, data, id) => {
  const q = `UPDATE
                tasks
            SET
                task_name = ${mysql.escape(data.taskName)},
                task_description = ${mysql.escape(data.taskDescription)}
            WHERE
                task_id = ${mysql.escape(id)}`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error
    results.message = 'Tâche mise à jour avec succès'
    clbk(results)
  })
}

// update task status
const updateTaskStatus = (clbk, data, id) => {
  const q = `UPDATE
                tasks
            SET
                task_done = ${mysql.escape(data.taskDone)}
            WHERE
                task_id = ${mysql.escape(id)}`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error
    results.message = 'Le statut à bien été modifié'
    clbk(results)
  })
}

// remove a task
const removeTask = (clbk, id) => {
  const q = `DELETE FROM
                tasks
            WHERE
                task_id = ${mysql.escape(id)}`

  mysql.query(q, (error, results, fields) => {
    if (error) throw error
    results.message = 'Tâche supprimée avec succès'
    clbk(results)
  })
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  updateTaskStatus,
  removeTask,
}

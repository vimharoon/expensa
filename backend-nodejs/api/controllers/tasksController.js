'use strict'
const Joi = require('@hapi/joi')
const moment = require('moment')
const taskModel = require('./../models/tasksModel')
const inputValidation = require('./../middlewares/input-validation')
moment.locale('fr')

// get all tasks
const getTasks = (req, res) => {
  taskModel.getTasks(response => {
    response.map(el => {
      el.task_date = moment(el.task_date).fromNow()
    })
    res.status(200).send(response)
  }, req.userData.user.user_id)
}

// create a new task
const createTask = (req, res) => {
  Joi.validate(req.body, inputValidation.tasksSchema, (err, values) => {
    if (err === null) {
      taskModel.createTask(
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

// update a task
const updateTask = (req, res) => {
  Joi.validate(req.body, inputValidation.tasksSchema, (err, values) => {
    if (err === null) {
      taskModel.updateTask(
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

// update task status
const updateTaskStatus = (req, res) => {
  Joi.validate(
    req.body,
    inputValidation.updateTaskStatusSchema,
    (err, values) => {
      if (err === null) {
        taskModel.updateTaskStatus(
          response => {
            res.status(201).send(response)
          },
          values,
          req.params.id
        )
      } else {
        res.boom.conflict(err)
      }
    }
  )
}

// remove a task
const removeTask = (req, res) => {
  Joi.validate(
    req.params,
    inputValidation.idValidationSchema,
    (err, values) => {
      if (err === null) {
        taskModel.removeTask(response => {
          res.status(201).send(response)
        }, values.id)
      } else {
        res.boom.conflict(err)
      }
    }
  )
}

module.exports = {
  getTasks,
  createTask,
  updateTask,
  updateTaskStatus,
  removeTask,
}

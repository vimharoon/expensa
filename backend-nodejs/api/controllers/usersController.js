'use strict';
const Joi = require('@hapi/joi');
const usersModel = require('./../models/usersModel');
const inputValidation = require('./../middlewares/input-validation');

// get all users
const getUsers = (req, res) => {
  if (req.userData.user.is_admin) {
    usersModel.getUsers(response => {
      res.status(200).send(response);
    });
  } else {
    res.boom.forbidden('vous n\'avez pas les autorisations nécessaires');
  }
};

// get user by id
const getUserById = (req, res) => {
  if (req.userData.user.is_admin) {
    Joi.validate(req.params, inputValidation.idValidationSchema, (err, values) => {
      if (err === null) {
        usersModel.getUsers(response => {
          res.status(200).send(response);
        }, values.id);
      } else {
        res.boom.conflict(err);
      }
    });
  } else {
    res.boom.forbidden('vous n\'avez pas les autorisations nécessaires');
  }
};

// update user informations
const updateUserInfo = (req, res) => {
  Joi.validate(req.body, inputValidation.updateUserSchema, (err, values) => {
    if (err === null) {
      usersModel.updateUser(response => {
        res.status(201).send(response);
      }, values);
    } else {
      res.boom.conflict(err);
    }
  });
};

// update user about information
const updateUserAbout = (req, res) => {
  Joi.validate(req.body, inputValidation.updateAboutSchema, (err, values) => {
    if (err === null) {
      usersModel.patch.about(response => {
        res.status(201).send(response);
      }, values, req.params.id);
    } else {
      res.boom.conflict(err);
    }
  });
};

// update user avatar
const updateUserAvatar = (req, res) => {
  usersModel.patch.avatar(response => {
    res.status(201).send(response);
  }, req.body, req.params.id);
};

// update user password
const updateUserPassword = (req, res) => {
  Joi.validate(req.body, inputValidation.passwordUpdateSchema, (err, values) => {
    if (err === null) {
      usersModel.patch.password(response => {
        res.status(201).send(response);
      }, values);
    } else {
      res.boom.conflict(err);
    }
  });
};

// remove user permanently
const removeUser = (req, res) => {
  Joi.validate(req.params, inputValidation.idValidationSchema, (err, values) => {
    if (err === null) {
      usersModel.removeUser(response => {
        res.status(201).send(response);
      }, values.id);
    } else {
      res.boom.conflict(err);
    }
  });
};

module.exports = {
  getUsers,
  getUserById,
  removeUser,
  updateUserInfo,
  updateUserAbout,
  updateUserAvatar,
  updateUserPassword,
};

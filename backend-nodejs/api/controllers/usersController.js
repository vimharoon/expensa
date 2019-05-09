'use strict';
const usersModel = require('./../models/userModel');

// get all users
const getUsers = (req, res) => {
  usersModel.getUsers(response => {
    res.status(200).send(response);
  });
};

// get user by id
const getUserById = (req, res) => {
  usersModel.getUsers(response => {
    res.status(200).send(response);
  }, req.params.id);
};

// update user informations
const updateUserInfo = (req, res) => {
  usersModel.updateUser(response => {
    res.status(201).send(response);
  }, req.body);
};

// update user about information
const updateUserAbout = (req, res) => {
  usersModel.patch.about(response => {
    res.status(201).send(response);
  }, req.body, req.params.id);
};

// update user avatar
const updateUserAvatar = (req, res) => {
  usersModel.patch.avatar(response => {
    res.status(201).send(response);
  }, req.body, req.params.id);
};

// update user password
const updateUserPassword = (req, res) => {
  usersModel.patch.password(response => {
    res.status(201).send(response);
  }, req.body);
};

// remove user permanently
const removeUser = (req, res) => {
  usersModel.removeUser(response => {
    res.status(201).send(response);
  }, req.params.id);
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

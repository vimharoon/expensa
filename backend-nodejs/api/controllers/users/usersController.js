'use strict';
const usersModel = require('./../../models/userModel');

const getUsers = (req, res) => {
  usersModel.getUsers(response => {
    res.status(200).send(response);
  });
};


module.exports = {
  getUsers
};

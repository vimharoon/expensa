'use strict';
const express = require('express');
const app = express();

// imports routes
const usersRoutes = require('./usersRoute');
const authRoutes = require('./authRoute');

// set routes in application
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

app.use('*', (req, res) => {
  res.boom.notFound(); // Responds with a 404 status code
});

module.exports = app;

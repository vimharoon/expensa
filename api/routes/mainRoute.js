'use strict';
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('ci with cercleci');
});

app.use('*', (req, res) => {
  res.boom.notFound(); // Responds with a 404 status code
});

module.exports = app;

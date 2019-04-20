'use strict';
const express = require('express');
const app = express();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// this will disable etag header for all requests
app.disable('etag').disable('x-powered-by');
// enable .env files
require('dotenv').config();

// use helmet for secure apps by setting various HTTP headers
app.use(helmet());

// use morgan to show the logs in console
app.use(morgan('dev'));

app.use('/website', express.static('public'));

app.get('/', (req, res) => {
  res.send('ci with cercleci');
});

// use body parser middlewares to parse request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(process.env.PORT || 8000);
console.log(`server running on port http://localhost:8000`);

module.exports = app;

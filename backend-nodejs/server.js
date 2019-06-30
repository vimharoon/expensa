'use strict'
const express = require('express')
const app = express()
const helmet = require('helmet')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const boom = require('express-boom')
const cors = require('cors')

// this will disable etag header for all requests
app.disable('etag').disable('x-powered-by')
// enable .env files
require('dotenv').config()

// import routes
const routes = require('./api/routes/mainRoute')

// use helmet for secure apps by setting various HTTP headers
app.use(helmet())

// use boom for REST error handling
app.use(boom())

// use morgan to show the logs in console
if (process.env.NODE_ENV === 'development') {
  const morgan = require('morgan')
  app.use(morgan('dev'))
}

// use body parser middlewares to parse request
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// set cors (Cross-origin resource sharing) config
app.use(
  cors({
    origin: process.env.ORIGIN_URL,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
)

// serve icon
app.use(favicon(__dirname + '/public/favicon.ico'))

// prefix all routes with '/api/v1'
app.use('/api/v1/', routes)

app.use((req, res) => {
  res.boom.notFound() // Responds with a 404 status code
})

app.listen(process.env.PORT || 8000)
console.log(`server running on port http://localhost:${process.env.PORT}`)

module.exports = app

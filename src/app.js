'use strict'

// Dependencies
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const Sentry = require('@sentry/node');
require('dotenv').config({ path: ".env" });

// Create server
const app = express();

// Init Sentry
Sentry.init({ dsn: 'https://aa551894b43f45069cd82e51dcc02771@sentry.io/1809203' });

// Disable  x powered
app.disable('x-powered-by');

// Mongoose conections
mongoose.connect(process.env.MONGO_URL_DEPLOY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('Database connected');
  })
  .catch(() => {
    console.log('Error on connect');
  });

// Middleware
app.use(Sentry.Handlers.requestHandler());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Set routs
app.use('/api/', require('./routes'));

app.get('/debug-sentry', function mainHandler(req, res) {
  throw new Error('My first Sentry error!');
});

app.use(Sentry.Handlers.errorHandler());

module.exports = app;

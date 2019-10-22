'use strict'

// Dependencies
const express = require('express');
const cors = require('cors');

// Create server
const app = express();

// Disable  x powered
app.disable('x-powered-by');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set routs
app.use('/api/v1/', require('./routes'));

module.exports = app;

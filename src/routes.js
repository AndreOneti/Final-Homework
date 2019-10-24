'use strict';

// Dependencies import
const express = require('express');

// Basic Router
const app = express()

// Routs
require('./components/default/router')(app);
require('./components/user/router')(app);

module.exports = app;
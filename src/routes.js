'use strict';

// Dependencies import
const express = require('express');

// Basic Router
const app = express()

// Routs
require('./components/default/router')(app);
require('./components/user/router')(app);
require('./middleware/auth')(app);
require('./components/customer/router')(app);
require('./components/order/router')(app);
require('./components/delivery/router')(app);

module.exports = app;

'use strict';

// Dependencies import
const express = require('express');
const auth = require('./middleware/auth');

// Basic Router
const app = express()

// Routs
require('./components/status/router')(app);
require('./components/default/router')(app);
require('./middleware/handleRequest')(app);
require('./components/user/router')(app);
// require('./middleware/auth')(app);
require('./components/customer/router')(app, auth);
require('./components/order/router')(app, auth);
require('./components/delivery/router')(app, auth);
require('./middleware/notFound.js')(app);

module.exports = app;

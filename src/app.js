'use strict'

// Dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: ".env" });

// Create server
const app = express();

// Disable  x powered
app.disable('x-powered-by');

// Mongoose conections
mongoose.connect(process.env.MONGO_URL_DEPLOY, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connection.on('open', function (ref) {
//   console.log('Connected to mongo server.');
//   //trying to get collection names
//   mongoose.connection.db.listCollections().toArray(function (err, names) {
//     console.log(names);
//   });
// })

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set routs
app.use('/api/', require('./routes'));

module.exports = app;

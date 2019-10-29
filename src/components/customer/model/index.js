'use strict';

const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
});

module.exports = model('customer', schema);

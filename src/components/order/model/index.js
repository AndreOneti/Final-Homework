'use strict';

const { Schema, model } = require('mongoose');

const schema = new Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = model('order', schema);

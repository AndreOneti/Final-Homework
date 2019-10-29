'use strict';

const { Schema, model } = require('mongoose');

const schema = new Schema({
  orderId: {
    type: Schema.Types.ObjectId,
    ref: 'order'
  },
  custumerId: {
    type: Schema.Types.ObjectId,
    ref: 'customer'
  },
  recieveName: {
    type: String,
    required: true,
    trim: true
  },
  recieveVatNumber: {
    type: String,
    required: true,
    trim: true
  },
  isBuyer: {
    type: Boolean,
    required: true,
    trim: true,
    default: false
  },
  deliveryDate: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = model('delivery', schema);

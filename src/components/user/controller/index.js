'use strict';

// Dependencies import
const { model } = require('mongoose');

// Model schema
require('../model/index');

// Models import
const User = model('user');

module.exports = {
  GetRout(req, res, next) {
    res.status(200).json({}).end();
  },
  PostRout(req, res, next) {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    user
      .save()
      .then((result) => {
        res.status(201).json({ message: "User created!" }).end();
      })
      .catch((err) => {
        res.status(409).json({ error: err }).end();
      });
  },
  GetByIdRout(req, res, next) {
    User
      .findOne({ name: req.params.id })
      .select('-__v -_id')
      .then(data => {
        res.status(200).json(data).end();
      })
      .catch(e => {
        res.status(400).json({
          message: "Error on find user",
          data: e
        }).end();
      });
  },
  DeleteRout(req, res, next) {
    User
      .findOneAndRemove({ name: req.params.id })
      .then(data => {
        res.status(200).json({}).end();
      })
      .catch(e => {
        res.status(404).json({
          message: "Error on find user",
          data: e
        }).end();
      });
  },
  PatchRout(req, res, next) {
    User
      .findOneAndUpdate({ name: req.params.id }, req.body)
      .then(data => {
        res.status(200).json({}).end();
      })
      .catch(e => {
        res.status(404).json({
          message: "Error on find user",
          data: e
        }).end();
      });
  }
}

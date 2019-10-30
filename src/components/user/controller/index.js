'use strict';

// Model schema import
const User = require('../model/index');
const UserValidator = require('../validators/index');

module.exports = {
  GetRout(req, res, next) {
    User
      .find()
      .select('-__v')
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
  PostRout(req, res, next) {
    let userValidator = new UserValidator();
    userValidator.isEmail(req.body.email, 'Email inválid');
    userValidator.isRequered(req.body.name, 'Name is required');
    userValidator.isRequered(req.body.email, 'Email is required');
    userValidator.isRequered(req.body.password, 'Password is required');

    // Se os dados forem inválidos
    if (!userValidator.isValid()) {
      res.status(400).send(userValidator.errors()).end();
      return;
    }

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    user
      .save()
      .then((result) => {
        res.status(201).json(result).end();
      })
      .catch((err) => {
        res.status(409).json({ error: err }).end();
      });
  },
  GetByIdRout(req, res, next) {
    User
      .findOne({ name: req.params.id })
      .select('-__v')
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
      .deleteOne({ name: req.params.id })
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
    let userValidator = new UserValidator();
    if (req.body.email) userValidator.isEmail(req.body.email, 'Email inválid');

    // Se os dados forem inválidos
    if (!userValidator.isValid()) {
      res.status(400).send(userValidator.errors()).end();
      return;
    }

    User
      .updateOne({ name: req.params.id }, req.body)
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

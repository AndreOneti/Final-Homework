'use strict';

// Model schema import
const Custumer = require('../model/index');

module.exports = {
  GetRout(req, res, next) {
    Custumer
      .find()
      .select('-__v')
      .then(data => {
        res.status(200).json(data).end();
      })
      .catch(e => {
        res.status(400).json({
          message: "Error on find customer",
          data: e
        }).end();
      });
  },
  PostRout(req, res, next) {
    const customer = new Custumer({
      name: req.body.name,
      email: req.body.email
    });

    customer
      .save()
      .then((result) => {
        res.status(201).json(result).end();
      })
      .catch((err) => {
        res.status(409).json({ error: err }).end();
      });
  },
  GetByIdRout(req, res, next) {
    Custumer
      .findOne({ name: req.params.id })
      .select('-__v')
      .then(data => {
        res.status(200).json(data).end();
      })
      .catch(e => {
        res.status(400).json({
          message: "Error on find custumer",
          data: e
        }).end();
      });
  },
  DeleteRout(req, res, next) {
    Custumer
      .deleteOne({ name: req.params.id })
      .then(data => {
        res.status(200).json({}).end();
      })
      .catch(e => {
        res.status(404).json({
          message: "Error on find custumer",
          data: e
        }).end();
      });
  },
  PatchRout(req, res, next) {
    Custumer
      .updateOne({ name: req.params.id }, req.body)
      .then(data => {
        res.status(200).json({}).end();
      })
      .catch(e => {
        res.status(404).json({
          message: "Error on find custumer",
          data: e
        }).end();
      });
  }
}

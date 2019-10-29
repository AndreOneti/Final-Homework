'use strict';

// Model schema import
const Order = require('../model/index');

module.exports = {
  GetRout(req, res, next) {
    Order
      .find()
      .select('-__v -_id')
      .then(data => {
        res.status(200).json(data).end();
      })
      .catch(e => {
        res.status(400).json({
          message: "Error on find order",
          data: e
        }).end();
      });
  },
  PostRout(req, res, next) {
    const order = new Order({
      description: req.body.description,
      quantity: req.body.quantity,
      price: req.body.price
    });

    order
      .save()
      .then((result) => {
        res.status(201).json({ message: "Order created!" }).end();
      })
      .catch((err) => {
        res.status(409).json({ error: err }).end();
      });
  },
  GetByIdRout(req, res, next) {
    Order
      .findOne({ description: req.params.id })
      .select('-__v -_id')
      .then(data => {
        res.status(200).json(data).end();
      })
      .catch(e => {
        res.status(400).json({
          message: "Error on find order",
          data: e
        }).end();
      });
  },
  DeleteRout(req, res, next) {
    Order
      .deleteOne({ description: req.params.id })
      .then(data => {
        res.status(200).json({}).end();
      })
      .catch(e => {
        res.status(404).json({
          message: "Error on find order",
          data: e
        }).end();
      });
  },
  PatchRout(req, res, next) {
    Order
      .updateOne({ description: req.params.id }, req.body)
      .then(data => {
        res.status(200).json({}).end();
      })
      .catch(e => {
        res.status(404).json({
          message: "Error on find order",
          data: e
        }).end();
      });
  }
}

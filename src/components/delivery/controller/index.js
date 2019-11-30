'use strict';

// Model schema import
const Delivery = require('../model/index');
const DeliveryValidator = require('../validator/index');

module.exports = {
  GetRout(req, res, next) {
    Delivery
      .find()
      .select('-__v')
      .populate('orderId')
      .populate('custumerId')
      .then((data) => {
        res.status(200).json(data).end();
      })
      .catch((e) => {
        res.status(400).json({
          message: "Error on find delivery",
          data: e
        }).end();
      });
  },
  PostRout(req, res, next) {
    let deliveryValidator = new DeliveryValidator();
    deliveryValidator.isRequered(req.body.recieveVatNumber, 'Price is required');
    deliveryValidator.isRequered(req.body.orderId, 'Description is required');
    deliveryValidator.isRequered(req.body.custumerId, 'Quantity is required');
    deliveryValidator.isRequered(req.body.deliveryDate, 'Price is required');
    deliveryValidator.isRequered(req.body.recieveName, 'Price is required');
    deliveryValidator.isRequered(req.body.location, 'Price is required');

    // Se os dados forem inválidos
    if (!deliveryValidator.isValid()) {
      res.status(400).send(deliveryValidator.errors()).end();
      return;
    }

    const delivery = new Delivery(req.body);

    delivery
      .save()
      .then((result) => {
        res.status(201).json(result).end();
      })
      .catch((err) => {
        res.status(409).json({ error: err }).end();
      });
  },
  GetByIdRout(req, res, next) {
    Delivery
      .findOne({ _id: req.params.id })
      .select('-__v')
      .populate('orderId')
      .populate('custumerId')
      .then((data) => {
        res.status(200).json(data).end();
      })
      .catch((e) => {
        res.status(400).json({
          message: "Error on find delivery",
          data: e
        }).end();
      });
  },
  DeleteRout(req, res, next) {
    Delivery
      .deleteOne({ recieveName: req.params.id })
      .then((data) => {
        res.status(200).json({}).end();
      })
      .catch((e) => {
        res.status(404).json({
          message: "Error on find delivery",
          data: e
        }).end();
      });
  },
  PatchRout(req, res, next) {
    Delivery
      .updateOne({ recieveName: req.params.id }, req.body)
      .then((data) => {
        res.status(200).json({}).end();
      })
      .catch((e) => {
        res.status(404).json({
          message: "Error on find delivery",
          data: e
        }).end();
      });
  }
}

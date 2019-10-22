'use strict';

module.exports = {
  GetRout(req, res, next) {
    res.status(200).json({
      title: "Node Rest API",
      version: "0.0.1",
      method: "GET"
    }).end();
  },

  PostRout(req, res, next) {
    res.status(200).json({
      title: "Node Rest API",
      version: "0.0.1",
      method: "POST"
    }).end();
  },

  PatchRout(req, res, next) {
    res.status(200).json({
      title: "Node Rest API",
      version: "0.0.1",
      method: "PATCH"
    }).end();
  },

  DeleteRout(req, res, next) {
    res.status(200).json({
      title: "Node Rest API",
      version: "0.0.1",
      method: "DELETE"
    }).end();
  }
}

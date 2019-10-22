'use strict';

module.exports = {
  GetRout(req, res, next) {
    console.log("Na rota get - Default");
    res.status(200).json({
      title: "Node Rest API",
      version: "0.0.1",
      method: "GET"
    }).end();
  },

  PostRout(req, res, next) {
    console.log("Na rota post - Default");
    res.status(200).json({
      title: "Node Rest API",
      version: "0.0.1",
      method: "POST"
    }).end();
  },

  PatchRout(req, res, next) {
    console.log("Na rota put - Default");
    res.status(200).json({
      title: "Node Rest API",
      version: "0.0.1",
      method: "PATCH"
    }).end();
  },

  DeleteRout(req, res, next) {
    console.log("Na rota delete - Default");
    res.status(200).json({
      title: "Node Rest API",
      version: "0.0.1",
      method: "DELETE"
    }).end();
  }
}

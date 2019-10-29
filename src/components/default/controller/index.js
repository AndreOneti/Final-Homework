'use strict';

module.exports = {
  GetRout(req, res, next) {
    res.status(200).json({
      title: "Home Work API",
      version: "1.0.0",
      method: "GET",
      API: [
        "/api/",
        "/api/user",
        "/api/customer",
      ]
    }).end();
  }
}

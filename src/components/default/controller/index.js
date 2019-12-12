'use strict';

module.exports = {
  GetRout(req, res, next) {
    res.status(200).json({
      title: "Home Work API",
      version: "1.0.0",
      method: "GET",
      API: [
        "/user",
        "/order",
        "/status",
        "/customer",
        "/delivery",
      ],
      others: {
        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
        message: `Route to ${req.method} ${req.originalUrl} not found`
      }
    }).end();
  }
}

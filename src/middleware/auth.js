function auth(req, res, next) {
  if ('Basic MTIzOjEyMw==' === req.headers.authorization) {
    next();
  } else {
    res.status(401).send('“You shall not pass” - White, Gandalf the').end();
  }
}

module.exports = app => app.use(auth);
// headers: {
//   'content-type': 'application/json',
//   authorization: 'Basic MTIzOjEyMw==',
//   host: 'localhost:3000',
//   'user-agent': 'vscode-restclient',
//   'accept-encoding': 'gzip',
//   'content-length': '61',
//   connection: 'close'
// }

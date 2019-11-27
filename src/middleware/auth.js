const User = require('../components/user/model/index');
const validator = require('../components/user/validator/index');
const md5 = require('md5');

/**
 *
 */
function auth(req, res, next) {

  if (!req.headers.authorization) {
    res.status(401).json({
      EfectMessage: '“You Shall Not Pass!” - White, Gandalf the',
      message: "Authorization is require!"
    }).end();
    return;
  }

  var [basic, token] = req.headers.authorization.split(' ');
  if (basic !== 'Basic') {
    res.status(401).json({
      EfectMessage: '“You Shall Not Pass!” - White, Gandalf the',
      message: 'Invalid Auth Method!'
    }).end();
    return;
  }
  var [email, password] = Buffer.from(token, 'base64').toString().split(':');

  var Validator = new validator();
  Validator.isEmail(email, 'Email is inválid');
  Validator.isRequered(password, 'Password is required');

  // Se os dados forem inválidos
  if (!Validator.isValid()) {
    let message = {};
    message.EfectMessage = '“You Shall Not Pass!” - White, Gandalf the';
    message.messages = Validator.errors();
    res.status(401).send(message).end();
    return;
  }

  password = md5(password + process.env.SALT_KEY_HASH);

  User
    .findOne({ email })
    .select('-__v')
    .then((data) => {
      if (data.password === password) {
        next();
      } else if (data.password !== password) {
        res.status(401).json({
          EfectMessage: '“You Shall Not Pass!” - White, Gandalf the',
          message: 'Password is invalid!'
        }).end();
        return;
      }
    })
    .catch((e) => {
      res.status(401).json({
        EfectMessage: '“You Shall Not Pass!” - White, Gandalf the',
        message: 'User Not Found'
      }).end();
      return;
    });
}

module.exports = (app) => app.use(auth);

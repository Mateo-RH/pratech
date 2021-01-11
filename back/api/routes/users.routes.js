const { Router } = require('express');
const Authenticate = require('../middlewares/authenticate');

module.exports = function ({ UserController }) {
  const router = Router();

  router.post('/', UserController.create.bind(UserController));
  router.post('/login', UserController.login.bind(UserController));
  router.get(
    '/validate',
    Authenticate,
    UserController.validate.bind(UserController)
  );

  return router;
};

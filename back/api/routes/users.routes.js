const { Router } = require('express');

module.exports = function ({ UserController }) {
  const router = Router();

  router.post('/', UserController.create.bind(UserController));
  router.post('/login', UserController.login.bind(UserController));

  return router;
};

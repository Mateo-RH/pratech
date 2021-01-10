const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function ({ UserRoutes }) {
  const router = Router();

  router.use(cors()).use(bodyParser.json());

  router.use('/users', UserRoutes);

  return router;
};

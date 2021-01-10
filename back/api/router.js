const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function ({ UserRoutes, ProductsRoutes }) {
  const router = Router();

  router.use(cors()).use(bodyParser.json());

  router.use('/users', UserRoutes);
  router.use('/products', ProductsRoutes);

  return router;
};

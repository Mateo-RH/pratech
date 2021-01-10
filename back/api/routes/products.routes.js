const { Router } = require('express');
const Authenticate = require('../middlewares/authenticate');

module.exports = function ({ ProductsController }) {
  const router = Router();

  router.post(
    '/',
    Authenticate,
    ProductsController.create.bind(ProductsController)
  );
  router.get(
    '/',
    Authenticate,
    ProductsController.getAll.bind(ProductsController)
  );
  router.get(
    '/:id',
    Authenticate,
    ProductsController.getOne.bind(ProductsController)
  );
  router.delete(
    '/:id',
    Authenticate,
    ProductsController.delete.bind(ProductsController)
  );
  router.patch(
    '/:id',
    Authenticate,
    ProductsController.update.bind(ProductsController)
  );

  return router;
};

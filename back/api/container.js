const { asClass, createContainer, asFunction, asValue } = require('awilix');

// app start
const Server = require('./server');
const config = require('../config');
const Router = require('./router');
const DB = require('../dal');

// Routes
const { UserRoutes, ProductsRoutes } = require('./routes');

// Controllers
const { UserController, ProductsController } = require('./controllers');

// Business
const { UserBusiness, ProductsBusiness } = require('../business');

// Repositories
const { UserRepositorty, ProductsRepository } = require('../dal/repositories');

const container = createContainer();
container
  .register({
    server: asClass(Server).singleton(),
    DB: asClass(DB).singleton(),
    router: asFunction(Router).singleton(),
    config: asValue(config),
  })
  .register({
    UserRoutes: asFunction(UserRoutes).singleton(),
    UserController: asClass(UserController).singleton(),
    UserBusiness: asClass(UserBusiness).singleton(),
    UserRepositorty: asValue(UserRepositorty),
  })
  .register({
    ProductsRoutes: asFunction(ProductsRoutes).singleton(),
    ProductsController: asClass(ProductsController).singleton(),
    ProductsBusiness: asClass(ProductsBusiness).singleton(),
    ProductsRepository: asValue(ProductsRepository),
  });

module.exports = container;

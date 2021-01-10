const { asClass, createContainer, asFunction, asValue } = require('awilix');

// app start
const Server = require('./server');
const config = require('../config');
const Router = require('./router');
const DB = require('../dal');

// Routes
const { UserRoutes } = require('./routes');

// Controllers
const { UserController } = require('./controllers');

// Business
const { UserBusiness } = require('../business');

// Repositories
const { UserRepositorty } = require('../dal/repositories');

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
  });

module.exports = container;

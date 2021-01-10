const container = require('./api/container');

const server = container.resolve('server');
const db = container.resolve('DB');

db.connect();
server.start();

const container = require('./api/container');

const server = container.resolve('server');
const db = container.resolve('DB');

server
  .start()
  .then(() => db.connect())
  .catch((err) => {
    console.log(err);
    process.exit();
  });

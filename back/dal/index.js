const mongoose = require('mongoose');

class DB {
  constructor({ config }) {
    this._config = config;
  }

  connect() {
    return new Promise((resolve, reject) => {
      mongoose.connect(
        this._config.DB,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
        },
        (err, res) => {
          if (err) return reject(err);
          console.log('Connected to db');
          resolve();
        }
      );
    });
  }
}

module.exports = DB;

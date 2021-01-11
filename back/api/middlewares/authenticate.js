const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const { authorization } = req.headers;

  jwt.verify(authorization, 'JWTSeed', (err, decoded) => {
    if (err) return res.status(401).send({ message: 'Unauthorized' });
    req.user = decoded.User;
    next();
  });
};

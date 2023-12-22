const jwt = require('jsonwebtoken');

const { SECRET_KEY, SECRET_ACCESS_KEY } = require('../config');

const generateTokens = (payload) => {
  const access_token = jwt.sign(payload, SECRET_KEY);
  const refresh_token = jwt.sign(payload, SECRET_ACCESS_KEY);

  return {
    access_token,
    refresh_token
  }
}

module.exports = { generateTokens }
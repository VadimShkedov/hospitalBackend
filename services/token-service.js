const jwt = require('jsonwebtoken');

const { SECRET_ACCESS_KEY, SECRET_REFRESH_KEY } = require('../config');
const Token = require('../models/token-model');

const generateTokens = (payload) => {
  const access_token = jwt.sign(payload, SECRET_ACCESS_KEY, { expiresIn: '10m' });
  const refresh_token = jwt.sign(payload, SECRET_REFRESH_KEY, { expiresIn: '30d' });

  return {
    access_token,
    refresh_token
  }
}

const saveToken = async (userId, token) => {
  await Token.create({ token, userId });
}

module.exports = { generateTokens, saveToken }
const jwt = require('jsonwebtoken');
const { SECRET_ACCESS_KEY, SECRET_REFRESH_KEY } = require('../../config');
const { MAX_REFRESH_TOKEN_LIFETIME, MAX_ACCESS_TOKEN_LIFETIME } = require('../../constants');
const Token = require('../models/token-model');

const generateTokens = (payload) => {
  const accessToken = jwt.sign(payload, SECRET_ACCESS_KEY, { expiresIn: MAX_ACCESS_TOKEN_LIFETIME });
  const refreshToken = jwt.sign(payload, SECRET_REFRESH_KEY, { expiresIn: MAX_REFRESH_TOKEN_LIFETIME });

  return {
    accessToken,
    refreshToken
  }
}

const saveRefreshToken = async (userId, token) => {
  const candidateToken = await Token.findByIdAndUpdate(userId, { token });

  if (!candidateToken) {
    await Token.create({ token, userId });
  }
}

module.exports = { generateTokens, saveRefreshToken }
const User = require('../models/user-model')
const registrationService = require('../services/user-service')

const registration = async (req, res) => {
  const { login, password } = req.body;
  const response = await registrationService(login, password);

  res.setCookie()

  res.status(200).json({
    access_token: response.tokens.access_token
  });
}

module.exports = { registration };
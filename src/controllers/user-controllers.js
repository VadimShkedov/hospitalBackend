const registrationService = require('../services/user-service');
const { ACCESS_TOKEN_COOKIE_OPTIONS, REFRESH_TOKEN_COOKIE_OPTIONS } = require('../../constants');

const registration = async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const newUser = await registrationService(login, password);

    res.cookie('accessToken', newUser.tokens.accessToken, ACCESS_TOKEN_COOKIE_OPTIONS);
    res.cookie('refreshToken', newUser.tokens.refreshToken, REFRESH_TOKEN_COOKIE_OPTIONS);

    return res.status(200).json(newUser);
  } catch (error) {
    next(error);
  } 
}

module.exports = { registration };
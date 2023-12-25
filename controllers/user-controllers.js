const registrationService = require('../services/user-service');
const { MAX_REFRESH_TOKEN_LIFETIME } = require('../constants')

const registration = async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const newUser = await registrationService(login, password);

    res.cookie('refreshToken', newUser.tokens.refreshToken, { maxAge: MAX_REFRESH_TOKEN_LIFETIME, httpOnly: true });

    return res.status(200).json(newUser);
  } catch (error) {
    next(error);
  } 
}

module.exports = { registration };
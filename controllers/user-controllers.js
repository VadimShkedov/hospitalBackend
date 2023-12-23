const { validationResult } = require('express-validator');

const registrationService = require('../services/user-service');
const ApiError = require('../exceptions/api-errors');

const registrationController = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Ошибка валидации при регистрации', errors.array()));
    }

    const { login, password } = req.body;
    const { user, tokens } = await registrationService(login, password);

    res.cookie('refreshToken', tokens.refresh_token, { maxAge: 2592000000, httpOnly: true });

    return res.status(200).json({
      userInfo: user,
      access_token: tokens.access_token
    });
  } catch (error) {
    next(error);
  } 
}

module.exports = { registrationController };
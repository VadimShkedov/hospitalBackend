const { validationResult } = require('express-validator');

const ApiError = require('../exceptions/api-errors');

const registrationValidationResult = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(ApiError.BadRequest('Ошибка валидации при регистрации', errors.array()));
  }
  return next();
}

module.exports = registrationValidationResult;
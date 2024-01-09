const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-errors');

const validatorResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(ApiError.BadRequest('Ошибка валидации при регистрации'));
  }

  next();
}

module.exports = validatorResult;
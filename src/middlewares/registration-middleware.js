const { body } = require('express-validator');
const validatorResult = require('./registration-validation-result');

const registrationValidation = [
  body('login')
    .isString()
    .trim()
    .isLength({ min: 6 }),
  body('password')
    .isString()
    .isLength({ min: 6 })
    .matches(/^[a-zA-Z]+\d+$/),
  validatorResult
];

module.exports = registrationValidation;
const { body } = require('express-validator');
const validatorResult = require('./registration-validation-result');

const registrationValidation = [
  body('login')
    .isString()
    .trim()
    .isLength({ min: 6 }),
  body('password')
    .isString()
    .trim()
    .matches(/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/),
  validatorResult
];

module.exports = registrationValidation;
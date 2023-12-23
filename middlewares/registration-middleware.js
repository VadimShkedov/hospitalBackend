const { body } = require('express-validator');

const registrationValidation = [
  body('login')
    .isString()
    .trim()
    .notEmpty(),
  body('password')
    .isString()
    .notEmpty()
    .isLength({ min: 4, max: 10 }),
];

module.exports = registrationValidation;
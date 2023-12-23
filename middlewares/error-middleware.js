const ApiError = require('../exceptions/api-errors');

module.exports = (err, req, res, next) => {
  if (err instanceof ApiError) {
    const { code, message, errors } = err;

    return res.status(code).json({ message, errors });
  }

  return res.status(500).send('Непредвиденная ошибка');
}
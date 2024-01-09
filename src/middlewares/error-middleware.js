const ApiError = require('../exceptions/api-errors');

module.exports = (err, req, res, next) => {
  if (err instanceof ApiError) {
    const { code, message } = err;

    return res.status(code).json({ message });
  }

  res.status(500).json({ message: 'Непредвиденная ошибка' });
}
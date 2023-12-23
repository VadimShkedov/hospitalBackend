class ApiError extends Error {
  code;
  message;
  errors;

  constructor(code, message, errors) {
    super(message);
    this.errors = errors
    this.code = code;
    this.message = message;
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
}

module.exports = ApiError;
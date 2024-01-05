class ApiError extends Error {
  code;
  errors;

  constructor(code, message, errors) {
    super(message);
    this.code = code;
    this.errors = errors
  }

  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
}

module.exports = ApiError;
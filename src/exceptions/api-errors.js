class ApiError extends Error {
  code;

  constructor(code, message) {
    super(message);
    this.code = code;
  }

  static BadRequest(message) {
    return new ApiError(400, message);
  }
}

module.exports = ApiError;
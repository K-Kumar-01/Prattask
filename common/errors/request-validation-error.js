const { CustomError } = require("./custom-error");

class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(errors) {
    super("Invalid request parameters");
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg, field: err.param };
    });
  }
}
exports.RequestValidationError = RequestValidationError;

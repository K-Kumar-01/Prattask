const { CustomError } = require("../errors/custom-error");

exports.errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ errors: err.serializeErrors() });
  }

  res.status(400).json({
    errors: [{ message: "Something went wrong", err }],
  });
};

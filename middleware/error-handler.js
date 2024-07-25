const { CustomAPIError } = require("../errors");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  return res.status(500).send(err);
};

module.exports = errorHandlerMiddleware;

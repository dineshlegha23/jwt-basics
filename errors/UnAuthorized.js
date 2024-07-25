const CustomAPIError = require("./custom-error");

class UnAuthorized extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnAuthorized;

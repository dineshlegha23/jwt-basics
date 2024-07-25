const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const authMiddleware = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken.startsWith("Bearer ")) {
    throw new CustomAPIError("Please provide token", 400);
  }

  const userToken = bearerToken.split(" ")[1];

  try {
    const decodedToken = await jwt.verify(userToken, "dinesh123");
    req.user = decodedToken;
    next();
  } catch (error) {
    throw new CustomAPIError("token verification failed", 400);
  }
};

module.exports = authMiddleware;

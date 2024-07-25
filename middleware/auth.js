const jwt = require("jsonwebtoken");
const { UnAuthorized, BadRequest } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    throw new BadRequest("Please provide token");
  }

  const userToken = bearerToken.split(" ")[1];

  try {
    const decodedToken = await jwt.verify(userToken, "dinesh123");
    req.user = decodedToken;
    next();
  } catch (error) {
    throw new UnAuthorized("token verification failed");
  }
};

module.exports = authMiddleware;

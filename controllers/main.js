const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const dashboard = async (req, res) => {
  const { username } = req.user;
  res.status(200).json({ msg: `Hello ${username}` });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("Please provide username and password", 400);
  }

  const token = await jwt.sign(
    { id: Math.random() * 100, username },
    "dinesh123"
  );
  res.status(200).json({ username, token });
};

module.exports = { dashboard, login };

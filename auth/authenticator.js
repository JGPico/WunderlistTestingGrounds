const jwt = require("jsonwebtoken");

const secrets = require("../secrets.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  const secret = secrets.jwtSecret;

  if (token) {
    // verify that the token is valid
    jwt.verify(token, secret, (error, decodedToken) => {
      // if everything is good with the token, the error will be undefined
      if (error) {
        res.status(401).json({ Message: "The token is incorrect" });
      } else {
        req.decodedToken = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({ message: "We didn't get a token" });
  }
};
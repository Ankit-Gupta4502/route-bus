const jwt = require("jsonwebtoken");
const User = require("../models/user/user");

const checkToken = async (req, res, next) => {
  try {
    let authToken = req.header["Authorization"] || req.header["authorization"];
    if (!authToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authToken.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "token is not valid", error: err });
      }
      req.decoded = decoded;
      next();
    });
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json("not found user");
  }
};

module.exports = { checkToken };

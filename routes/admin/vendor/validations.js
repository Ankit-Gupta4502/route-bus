const { body } = require("express-validator");

exports.loginRules = () => [
  body("email")
    .notEmpty()
    .withMessage("Please enter your email")
    .isEmail()
    .withMessage("Please enter valid email"),
    body("password").notEmpty().withMessage("Please enter your password"),
];

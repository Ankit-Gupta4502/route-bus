const app = require("express");
const { login, register } = require("./vendor/handlers");
const { loginRules } = require("./vendor/validations");
const routes = app.Router();

routes.post("/login", loginRules(), login);
routes.post("/register", loginRules(),register);

module.exports = routes;

const Admin = require("../../../models/admin/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); 
const { validationResult } = require("express-validator");
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const validation =  validationResult(req)

    if (!validation.isEmpty()) {
     return res.status(422).json(validation.mapped());
    }
    const user = await Admin.findOne({ where: { email } });
    if (!user) {
      return res.status(422).send({ message: "User not found" });
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      return res.status(422).send({ message: "Invalid password" });
    }
    const token = await jwt.sign(user.dataValues, process.env.JWT);
    const newUser = { ...user.dataValues };
    newUser.token = token;
    return res
      .status(200)
      .send({ message: "User Found Successfully", user: newUser });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error, message: "Something went wrong" });
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await Admin.findOne({ where: { email } });
    if (!findUser) {
      const user = await Admin.create({ email, password });
      const token = jwt.sign(user.dataValues, process.env.JWT);
      const newUser = { ...user.dataValues };
      newUser.token = token;
      return res
        .status(200)
        .send({ message: "User Added Successfully", user: newUser });
    }
    return res.status(422).send({ message: "User Already Exist" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error, message: "Something went wrong" });
  }
};

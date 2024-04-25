const bcrypt = require("bcrypt");
const sequelize = require("../../util/database");
const { DataTypes } = require("sequelize");

const admin = sequelize.define(
  "admin",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validations: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

admin.sync();
module.exports = admin;

admin.addHook("beforeCreate", async (user) => {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    return user;
});

const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");

const Conductor = sequelize.define("conductor", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 50]
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            notEmpty: true, 
            len: [10, 10] 
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
        validate: {
            notEmpty: true, 
            isEmail: true 
        }
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
}, {
    timestamps: true,
});
Conductor.sync()
module.exports = Conductor;
const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const Otp = sequelize.define("otp", {
    user_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    otp: {
        type: DataTypes.INTEGER,
    },
    isVerified:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    timestamps: true,
});

Otp.sync()
module.exports = Otp;
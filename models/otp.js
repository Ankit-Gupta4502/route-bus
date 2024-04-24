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
    
}, {
    timestamps: true,
});


module.exports = Otp;
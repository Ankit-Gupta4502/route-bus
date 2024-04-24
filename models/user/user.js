const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");

const User = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 50]
        }
    },
    phone: {
        type: DataTypes.INTEGER,
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
    password: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
      walletBalance: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
      },
      gender: {
        type: DataTypes.STRING,
      },
     address:{
        type: DataTypes.STRING,
     },
     locationPermission:{
        type: DataTypes.BOOLEAN,
     },
     notificationPermission:{
        type: DataTypes.BOOLEAN,
     },
     referalCode: {
        type: DataTypes.STRING,
        validate: { 
            len: [5, 10] 
        }
    },
}, {
    timestamps: true,
});


module.exports = User;
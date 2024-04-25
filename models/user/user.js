const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");
const Bookings = require("../bus/Bookings");

const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        validate: {
            notEmpty: true, 
            len: [10, 10] 
        }
    },
    // email: {
    //     type: DataTypes.STRING,
    //     allowNull: false, 
    //     unique: true,
    //     validate: {
    //         notEmpty: true, 
    //         isEmail: true 
    //     }
    // },
    // password: {
    //     type: DataTypes.STRING,
    //     allowNull: false,  
    // },
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

User.sync();
User.hasMany(Bookings,{
    foreignKey:"userId"
});
Bookings.belongsTo(User)

module.exports = User;
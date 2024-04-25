const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");
const User = require("../user/user");


const Bookings= sequelize.define(
  "Bookings",
  {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
    child: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   luggage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    adults: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paymentId: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
  
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    userId:{
      type:DataTypes.INTEGER,
      model:User,
      key:"id"
    }
  },
  {
    timestamps: true,
  }
);
Bookings.sync({alter:true})
module.exports =Bookings ;

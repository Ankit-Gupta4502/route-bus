const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");


const OwnerDetails = sequelize.define(
  "OwnerDetails",
  {
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
    pancard: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   adharcard: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
OwnerDetails.sync(); 

module.exports =OwnerDetails

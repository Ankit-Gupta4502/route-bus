const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");
const BusDetails=require("../bus/BusDetails");


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
    isVerified:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

  },
  {
    timestamps: true,
  }
);
OwnerDetails.sync(); 
OwnerDetails.hasMany(BusDetails,{
  foreignKey:"userId"
});
BusDetails.belongsTo(OwnerDetails);
module.exports =OwnerDetails

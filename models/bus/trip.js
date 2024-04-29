const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");
const BusDetails = require("./BusDetails");

const Trip = sequelize.define(
  "Trip",
  {
    tripDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    busDetailsId:{
        type:DataTypes.INTEGER,
        model:BusDetails,
        key:"id"
      }
  },
  {
    timestamps: false,
  }
);
BusDetails.hasMany(Trip, {
    foreignKey:"busDetailsId"
  });
  Trip.belongsTo(BusDetails);
  

module.exports = Trip;

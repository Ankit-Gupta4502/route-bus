const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");
const Trip = require("./Trip");

const Stops = sequelize.define(
  "Stops",
  {
    stopName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
    distanceFromSource:{
        type: DataTypes.STRING,
      allowNull: false
    },
    arrivalTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    departureTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tripId:{
        type:DataTypes.INTEGER,
        model:Trip,
        key:"id"
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
Stops.sync();

Trip.hasMany(Stops, {
    foreignKey:"tripId"
  });
  Stops.belongsTo(Trip);
module.exports = Stops;

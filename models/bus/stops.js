const { DataTypes, Op } = require("sequelize");
const sequelize = require("../../util/database");
const BusDetails = require("./BusDetails");

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
    distanceFromSource: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    travelTime: {
      type: DataTypes.INTEGER,  
      allowNull: false,
    },
    sequence: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    expectedArrivalTime: {
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
    timestamps: true,
  }
);

Stops.sync({ alter: true });

BusDetails.hasMany(Stops, {
  foreignKey: "busDetailsId",
}); 
Stops.belongsTo(BusDetails);

module.exports = Stops;

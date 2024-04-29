const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");
const OwnerDetails = require("../owner/OwnerDetails");

const Route = sequelize.define(
    "Route",
    {
        from: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          to: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    }
);

OwnerDetails.hasMany(Route,{
    foreignKey:"ownerDetailsId"
  });
  
  Route.belongsTo(OwnerDetails);
  
  Route.sync();
  module.exports = Route;


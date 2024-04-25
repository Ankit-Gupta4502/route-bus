const { DataTypes } = require("sequelize");
const sequelize = require("../../util/database");
const OwnerDetails = require("../owner/Owner");

const BusDetails = sequelize.define(
  "BusDetails",
  {
    busNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
    bus_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    permit_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bus_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bus_make: {
      type: DataTypes.STRING, //ashokalayland
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_station: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    driver_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driver_phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    conductor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conductor_phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image_license: {
        type: DataTypes.BLOB,
        allowNull: false
     },
    image_driver: {
        type: DataTypes.BLOB,
        allowNull: false
     },
    from: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // isAc: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
    // isSleeper: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    // },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isApproved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ownerDetailsId:{
      type:DataTypes.INTEGER,
      model:OwnerDetails,
      key:"id"
    }
  },
  {
    timestamps: true,
  }
);
BusDetails.sync();
module.exports = BusDetails

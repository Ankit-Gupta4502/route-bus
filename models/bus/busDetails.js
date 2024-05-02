const mongoose = require("mongoose");

const busDetailsSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: true,
  },
  bus_type: {
    type: String,
    required: true,
  },
  permit_type: {
    type: String,
    required: true,
  },
  bus_name: {
    type: String,
    required: true,
  },
  bus_make: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  base_station: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },
  driver_name: {
    type: String,
    required: true,
  },
  driver_phone: {
    type: String,
    required: true,
  },
  conductor_name: {
    type: String,
    required: true,
  },
  conductor_phone: {
    type: String,
    required: true,
  },
  image_license: {
    type: String,
    required: true,
  },
  image_driver: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  departureTime: {
    type: String, // Assuming time is stored as a string in the format "HH:MM"
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isApproved: {
    type: Boolean,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
    required: true,
  },
  ownerDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OwnerDetails",
    required: true,
  },
}, { timestamps: true });

const BusDetails = mongoose.model("BusDetails", busDetailsSchema);

module.exports = BusDetails;

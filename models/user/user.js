const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  walletBalance: {
    type: Number,
    default: 0.00,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  locationPermission: {
    type: Boolean,
  },
  notificationPermission: {
    type: Boolean,
  },
  referalCode: {
    type: String,
  },
  bookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bookings",
  }],
}, { timestamps: true });

module.exports  = mongoose.model("User", userSchema);



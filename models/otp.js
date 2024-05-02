const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  user_type: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  otp: {
    type: Number,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Otp = mongoose.model("Otp", otpSchema);

module.exports = Otp;

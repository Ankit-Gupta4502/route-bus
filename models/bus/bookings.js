const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
    validate: {
      min: 2,
      max: 50,
    },
  },
  child: {
    type: Number,
    required: true,
  },
  luggage: {
    type: Number,
    required: true,
  },
  adults: {
    type: Number,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
    validate: {
      min: 2,
      max: 50,
    },
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
  isConfirmed: {
    type: Boolean,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
}, { timestamps: true });

const Bookings = mongoose.model("Bookings", bookingSchema);

module.exports = Bookings;

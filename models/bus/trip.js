const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  tripDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  busDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusDetails",
    required: true,
  },
}, { timestamps: false });

const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;

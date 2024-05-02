const mongoose = require("mongoose");

const stopsSchema = new mongoose.Schema({
  stopName: {
    type: String,
    required: true,
  },
  distanceFromSource: {
    type: Number,
    required: true,
  },
  travelTime: {
    type: String, // Assuming time is stored as a string in the format "HH:MM"
    required: true,
  },
  sequence: {
    type: String,
    required: true,
  },
  expectedArrivalTime: {
    type: String,
    required: true,
  },
  busDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusDetails",
    required: true,
  },
}, { timestamps: true });

const Stops = mongoose.model("Stops", stopsSchema);

module.exports = Stops;

const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  ownerDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OwnerDetails",
    required: true,
  },
}, { timestamps: true });

const Route = mongoose.model("Route", routeSchema);

module.exports = Route;

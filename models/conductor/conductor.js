const mongoose = require("mongoose");

const conductorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const Conductor = mongoose.model("Conductor", conductorSchema);

module.exports = Conductor;

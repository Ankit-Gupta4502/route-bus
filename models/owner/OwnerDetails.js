const mongoose = require("mongoose");

const ownerDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    type: String,
  },
  pancard: {
    type: String,
  },
  adharcard: {
    type: Number,
  },
}, { timestamps: true });

const OwnerDetails = mongoose.model("OwnerDetails", ownerDetailsSchema);

module.exports = OwnerDetails;

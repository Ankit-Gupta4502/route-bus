const mongoose = require("mongoose");

const bankDetailsSchema = new mongoose.Schema({
  accountNumber: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  IFSCCode: {
    type: String,
    required: true,
  },
  ownerDetailsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OwnerDetails",
    required: true,
  },
}, { timestamps: true });

const BankDetails = mongoose.model("BankDetails", bankDetailsSchema);

module.exports = BankDetails;

const BankDetails = require("../../models/owner/BankDetails");
const OwnerDetails = require("../../models/owner/OwnerDetails");


exports.ownerProfile = async(req, res) => {
 
  try {
    const { name, phone,email,adharcard,pancard,accountNumber, bankName, IFSCCode } = req.body;
    console.log(req.body)
    const newOwner = await OwnerDetails.create({
      name,
      email,
      phone,
      pancard,
      adharcard
    });
    const newBankDetails = await BankDetails.create({
      ownerDetailsId: newOwner.id,
      accountNumber,
      bankName, 
      IFSCCode,
    });
    return res.status(201).json({ owner: newOwner, bankDetails: newBankDetails });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};



 
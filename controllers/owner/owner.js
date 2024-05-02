const BankDetails = require("../../models/owner/BankDetails");
const OwnerDetails = require("../../models/owner/OwnerDetails");


exports.ownerProfile = async(req, res) => {

  try {
    const { name,email,adharcard,pancard,accountNumber, bankName, IFSCCode } = req.body;
    const existingOwner=await OwnerDetails.findById(req.decoded.userss._id);
 
    if (!existingOwner) {
      return res.status(404).json({ message: 'Owner details not found.' });
    }

    existingOwner.name = name;
    existingOwner.email = email;
    existingOwner.adharcard = adharcard;
    existingOwner.pancard = pancard;
    await existingOwner.save();

    const newBankDetails = await BankDetails.create({
      ownerDetailsId: existingOwner._id,
      accountNumber,              
      bankName, 
      IFSCCode,
    });
    console.log(existingOwner,existingOwner._id,newBankDetails)
    return res.status(201).json({ owner: existingOwner, bankDetails: newBankDetails });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};



 
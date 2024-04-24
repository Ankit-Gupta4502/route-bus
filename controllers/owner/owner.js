const Owner= require("../../models/owner/owner");


exports.register = async(req, res) => {
    const {name, email,phone,adharcard,pancard,isConfirmed,isVerified,isDeleted } = req.body;
    const existingOwner = await Owner.findOne({ where: { email: email } });
    try {
      if (existingOwner) {
       return res.status(409).json("Email already exists");
      } else {

        const newOwner = await Owner.create({
          email,
          name,
          phone,
          adharcard,pancard,isConfirmed,isVerified,isDeleted 
        });
        const savedOwner = await newOwner.save();
        return res.status(200).json(savedOwner);
    }
    } catch (error) {
     return res.status(500).send("Internal Server Error");
    }
  };

  exports.updateVerification = async (req, res) => {
    const { ownerId } = req.params; 
    const { isVerified } = req.body;
  
    try {
      const ownerToUpdate = await Owner.findOne({ where: { id: ownerId } });
  
      if (!ownerToUpdate) {
        return res.status(404).json("Owner not found");
      }
  
      ownerToUpdate.isVerified = isVerified;
      await ownerToUpdate.save();
  
      return res.status(200).json(ownerToUpdate);
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  };
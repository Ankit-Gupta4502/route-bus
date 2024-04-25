const Owner= require("../../models/Otp");


exports.ownerProfile = async(req, res) => {
  console.log(req.params)
    // const {name, email,phone ,user_type} = req.body;
    // const existingOwner = await Otp.findOne({ where: {phone} });
    // try {
    //   if (existingOwner) {
    //    return res.status(409).json("Email already exists");
    //   } else {

    //     const newOwner = await Owner.create({
    //       email,
    //       name,
    //       phone,
    //       adharcard,pancard,isConfirmed,isVerified,isDeleted 
    //     });
    //     const savedOwner = await newOwner.save();
    //     return res.status(200).json(savedOwner);
    // }
    // } catch (error) {
    //  return res.status(500).send("Internal Server Error");
    // }
  };

 
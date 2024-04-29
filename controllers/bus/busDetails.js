const Bus = require("../../models/bus/BusDetails");
const Owner = require("../../models/owner/OwnerDetails");


exports.addBus = async (req, res) => {
  const { ownerId } = req.params;

  try {
    
      const owner = await Owner.findOne({ where: { id: ownerId } });
      if (!owner) {
        return res.status(401).json("Owner not verified or not found");
      }

        const newBus = await Bus.create({
          ...req.body,
          ownerDetailsId: ownerId,
          isApproved: false,
         
        });
  
        return res.status(200).json({ message: "Bus added successfully", data: newBus });

  } catch (error) {
    console.error("Error adding bus details:", error);
    return res.status(500).send("Internal Server Error");
  }
};

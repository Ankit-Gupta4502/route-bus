const { normalize } = require("path");
const Bus = require("../../models/bus/BusDetails");
const conductor = require("../../models/conductor/conductor");
const Owner = require("../../models/owner/OwnerDetails");

exports.addBus = async (req, res) => {
  const { ownerId } = req.params;

    try {
        const owner = await Owner.findOne({ where: { id: ownerId, isVerified: true } });
        if (!owner) {
            return res.status(401).json("Owner not verified or not found");
        }
        const newBus = await Bus.create({
          ...req.body,
          ownerDetailId:ownerId,
            isApproved: false, 
        });

        return res.status(200).json(newBus);
    } catch (error) {
        console.error("Error adding bus details:", error);
        return res.status(500).send("Internal Server Error");
    }
};

exports.addBusDetail = async (req, res) => {
  const {
    busNumber,
    bus_type,
    permit_type,
    bus_name,
    bus_make,
    color,
    base_station,
    pincode,
    driver_name,
    driver_phone,
    conductor_name,
    conductor_phone,
    image_license,
    image_driver,
    from,
    to,
    capacity,
    price,
    isApproved,
    ownerDetailId,
  } = req.body;
  console.log('====================================');
  console.log(req.files.image_driver[0].path,"pathhhh");
  console.log('====================================');
  try {
    const bus = await Bus.findOne({ where: { busNumber: busNumber } });
    if (bus) {
      return res.status(401).json("This bus number already exists");
    }
    const newBus = await Bus.create({
      busNumber,
      bus_type,
      permit_type,
      bus_name,
      bus_make,
      color,
      base_station,
      pincode,
      driver_name,
      driver_phone,
      conductor_name,
      conductor_phone,
      image_license:req.files.image_license[0].path,
      image_driver:req.files.image_driver[0].path,
      from,
      to,
      capacity,
      price,
      isApproved,
      ownerDetailId,
    });

    return res.status(200).json(newBus);
  } catch (error) {
    console.log(error, "isisj");
    console.error("Entry is not valid", error);
    res.status(501).send("Internal server error");
  }
};

exports.addConductor = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newConductor = await conductor.findOne({ where:{ email: email } });
    if (newConductor) {
      return res.status(422).json("This email already exists");
    }

    const savedConductor = await conductor.create({
      name,
      email,
      phone,
    });
    return res.status(200).json(savedConductor);
  } catch (error) {
    console.error(error, "Something went wrong");
    return res.status(501).send("Internal server error");
  }
};

exports.addBusDetail = async (req, res) => {
  const {
    busNumber,
    bus_type,
    permit_type,
    bus_name,
    bus_make,
    color,
    base_station,
    pincode,
    driver_name,
    driver_phone,
    conductor_name,
    conductor_phone,
    image_license,
    image_driver,
    from,
    to,
    capacity,
    price,
    isApproved,
    ownerDetailId,
  } = req.body;
  // console.log('====================================');
  // console.log(req.files.image_driver[0].path,"pathhhh");
  // console.log('====================================');
  try {
    const bus = await Bus.findOne({ where: { busNumber: busNumber } });
    if (bus) {
      return res.status(401).json("This bus number already exists");
    }
    const newBus = await Bus.create({
      busNumber,
      bus_type,
      permit_type,
      bus_name,
      bus_make,
      color,
      base_station,
      pincode,
      driver_name,
      driver_phone,
      conductor_name,
      conductor_phone,
      image_license:req.files.image_license[0].path,
      image_driver:req.files.image_driver[0].path,
      from,
      to,
      capacity,
      price,
      isApproved,
      ownerDetailId,
    });

    return res.status(200).json(newBus);
  } catch (error) {
    console.log(error, "isisj");
    console.error("Entry is not valid", error);
    res.status(501).send("Internal server error");
  }
};

exports.addConductor = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newConductor = await conductor.findOne({ where:{ email: email } });
    if (newConductor) {
      return res.status(422).json("This email already exists");
    }

    const savedConductor = await conductor.create({
      name,
      email,
      phone,
    });
    return res.status(200).json(savedConductor);
  } catch (error) {
    console.error(error, "Something went wrong");
    return res.status(501).send("Internal server error");
  }
};


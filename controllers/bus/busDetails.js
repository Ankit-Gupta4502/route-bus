const Bus = require("../../models/bus/busDetails");
const conductor = require("../../models/conductor/conductor");
const Owner = require("../../models/owner/OwnerDetails");



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
    from,
    to,
    departureTime,
    capacity,
    price,
    isApproved,
    ownerDetailsId,
  } = req.body;
  const {id} = req.decoded


  try {
    const bus = await Bus.findOne({ where: { busNumber: busNumber } });
    if (bus) {
      return res
        .status(401)
        .json({ message: "This bus number already exists" });
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
      image_license: req.files.image_license[0].path,
      image_driver: req.files.image_driver[0].path,
      from,
      to,
      departureTime,
      capacity,
      price,
      isApproved,
      ownerDetailsId,
    });
    return res.status(200).json(newBus);
  } catch (error) {
    console.log(error, "isisj");
    console.error("Entry is not valid", error);
    res.status(501).send({ message: "Internal server error" });
  }
};

exports.addConductor = async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newConductor = await conductor.findOne({ where: { email: email } });
    if (newConductor) {
      return res.status(422).json({ message: "This email already exists" });
    }

    const savedConductor = await conductor.create({
      name,
      email,
      phone,
    });
    return res.status(200).json(savedConductor);
  } catch (error) {
    console.error(error, "Something went wrong");
    return res.status(501).send({ message: "Internal server error" });
  }
};

exports.deleteBusDetails = async (req, res) => {
  const { id } = req.params;
  try {
    await Bus.update({ isDeleted: true }, { where: { id } });
    return res.status(200).send({ message: "Bus deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

exports.deleteConductor = async (req, res) => {
  const { id } = req.params;
  try {
    await conductor.update({ isDeleted: true }, { where: { id } });
    return res.status(200).send({ message: "conductor deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

exports.editBusDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const oldBus = await Bus.findByPk(id);
    const oldImageLicensePath = oldBus.image_license;
    const oldImageDriverPath = oldBus.image_driver;
    const manageBusDetails = await Bus.update(
      {
        busNumber: req.body.busNumber,
        bus_type: req.body.bus_type,
        permit_type: req.body.permit_type,
        bus_name: req.body.bus_name,
        bus_make: req.body.bus_make,
        color: req.body.color,
        base_station: req.body.base_station,
        pincode: req.body.pincode,
        driver_name: req.body.driver_name,
        driver_phone: req.body.driver_phone,
        conductor_name: req.body.conductor_name,
        conductor_phone: req.body.conductor_phone,
        image_license:
          req.files && req.files.image_license && req.files.image_license[0]
            ? req.files.image_license[0].path
            : undefined,
        image_driver:
          req.files && req.files.image_driver && req.files.image_driver[0]
            ? req.files.image_driver[0].path
            : undefined,
        from: req.body.from,
        to: req.body.to,
        departureTime:req.body.departureTime,
        capacity: req.body.capacity,
        price: req.body.price,
      },
      { where: { id: id } }
    );
    if (manageBusDetails[0] === 1) {
      if (oldImageLicensePath && oldImageDriverPath) {
        const fs = require('fs');
        fs.unlinkSync(oldImageLicensePath);
        fs.unlinkSync(oldImageDriverPath);
      }
      // return res.status(422).send({ message: "Bus not found" });
 
    return res
      .status(200)
      .send({ message: "Bus Details updated successfully", manageBusDetails });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal server error" });
  }
};
exports.editConductorDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const manageBusDetails = await conductor.update(
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
      },
      { where: { id } }
    );
    if (!manageBusDetails?.[0]) {
      return res.status(422).send("Conductor not found");
    }

    return res
      .status(200)
      .send({
        message: "conductor Details updated successfully",
        manageBusDetails,
      });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};



const { body } = require("express-validator");

exports.validateAddBusDetail =()=> [
    body("busNumber").notEmpty().withMessage("Please enter bus number"),
    body("bus_type").notEmpty().withMessage("Please enter bus type"),
    body("permit_type").notEmpty().withMessage("Please enter permit type"),
    body("bus_name").notEmpty().withMessage("Please enter bus name"),
    body("bus_make").notEmpty().withMessage("Please enter bus make"),
    body("color").notEmpty().withMessage("Please enter bus color"),
    body("base_station").notEmpty().withMessage("Please enter base station"),
    body("pincode").notEmpty().withMessage("Please enter pincode"),
    body("driver_name").notEmpty().withMessage("Please enter driver name"),
    body("driver_phone").notEmpty().withMessage("Please enter driver phone"),
    body("conductor_name").notEmpty().withMessage("Please enter conductor name"),
    body("conductor_phone").notEmpty().withMessage("Please enter conductor phone"),
    body("from").notEmpty().withMessage("Please enter journey starting point"),
    body("to").notEmpty().withMessage("Please enter journey ending point"),
    body("capacity").notEmpty().withMessage("Please enter bus capacity"),
    body("price").notEmpty().withMessage("Please enter bus price"),
    // body("isApproved").notEmpty().withMessage("Please enter approval status"),
    // body("ownerDetailId").notEmpty().withMessage("Please enter owner detail ID"),
  ];

const {
  addBus,
  addBusDetail,
  addConductor,
  deleteBusDetails,
  deleteConductor,
  editBusDetails,
  editConductorDetails,
} = require("../../controllers/bus/busDetails");
const { checkToken } = require("../../middleware/auth");
const { uploadMulter } = require("../../util/index");

const router = require("express").Router();

router.post("/add-bus/:ownerId", checkToken, addBus);
router.post(
  "/add-bus-detail",
  uploadMulter().fields([
    { name: "image_license", maxCount: 1 },
    { name: "image_driver", maxCount: 1 },
  ]),
  checkToken,
  addBusDetail
);
router.post("/add-conductor", checkToken, addConductor);
router.delete("/bus-delete/:id",checkToken, deleteBusDetails);
router.delete("/conductor-delete/:id",checkToken, deleteConductor);
router.put(
  "/updateBus/:id",
  uploadMulter().fields([
    { name: "image_license", maxCount: 1 },
    { name: "image_driver", maxCount: 1 },
  ]),
  checkToken,
  editBusDetails
);
router.put("/updateConductor/:id",checkToken, editConductorDetails);
module.exports = router;

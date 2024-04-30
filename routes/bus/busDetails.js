const {
  addBus,
  addBusDetail,
  addConductor,
} = require("../../controllers/bus/busDetails");
const { checkToken } = require("../../middleware/auth");
const { uploadMulter } = require("../../util/index");

const router = require("express").Router();

// router.post("/add-bus/:ownerId", checkToken, addBus);
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

module.exports = router;

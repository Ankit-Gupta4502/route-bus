
const { addBus} = require("../../controllers/bus/busDetails");



const router = require("express").Router();

router.post("/add-bus/:ownerId",addBus);

module.exports=router;
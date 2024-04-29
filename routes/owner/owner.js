const { ownerProfile } = require("../../controllers/owner/owner");
const { checkToken } = require("../../middleware/auth");



const router = require("express").Router();

router.post("/profile",checkToken,ownerProfile);


module.exports=router;
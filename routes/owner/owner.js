const { register, updateVerification } = require("../../controllers/owner/owner");



const router = require("express").Router();

router.post("/register",register);
router.patch("/:ownerId/verification", updateVerification);

module.exports=router;
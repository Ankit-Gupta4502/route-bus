

const { register, login, getAllUsers } = require("../../controllers/user/user");
const authUser = require("../../middleware/auth");


const router = require("express").Router();

router.post("/register",register);
router.post("/login",login);
router.get("/getAllUsers",authUser,getAllUsers);
module.exports=router;
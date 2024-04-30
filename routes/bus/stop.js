  const { saveStops } = require("../../controllers/bus/stops");
const { checkToken } = require("../../middleware/auth");
  

  const router = require("express").Router();

  router.post("/saveStops",checkToken,saveStops);

  module.exports=router;
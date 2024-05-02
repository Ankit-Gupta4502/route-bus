const express=require("express");
const app=express();
const userRoute=require("./routes/user/user");
const ownerRoute = require("./routes/owner/owner");
const busRoute = require("./routes/bus/busDetails");
const otpRoutes=require("./middleware/otp");
const stopRoutes=require("./routes/bus/stop");
const cors = require("cors")
const adminRoutes = require("./routes/admin/index");

app.use(express.static("./public"))
app.use(cors())

 
require('dotenv').config(); 

app.use(express.json());

app.use("/api/mobile/user",userRoute); 
app.use("/api/mobile/owner",ownerRoute);
app.use("/api/mobile/bus",busRoute); 
app.use("/api/mobile/otp", otpRoutes);
 app.use("/api/mobile/stops",stopRoutes)
app.use("/api/admin",adminRoutes)
 
 
app.listen(5000,()=>console.log("working on 5000"));

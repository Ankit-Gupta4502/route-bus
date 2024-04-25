const express=require("express");
const app=express();
const userRoute=require("./routes/user/user");
const sequelize = require("./util/database");
const ownerRoute = require("./routes/owner/owner");
const busRoute = require("./routes/bus/busDetails");
const otpRoutes=require("./middleware/otp");
const User = require("./models/user/user");
const Bookings = require("./models/bus/Bookings");

app.get("/bookings",async(req,res)=>{
    try {
        const resp = await Bookings.findAll({
            include:[{model:User}]
        })
        return res.status(200).json({resp})
    } catch (error) {
        console.error(error);
        return res.status(500).json({error})
    }
})

require('dotenv').config();

app.use(express.json());

app.use("/api/mobile/user",userRoute);
app.use("/api/mobile/owner",ownerRoute);
app.use("/api/mobile/bus",busRoute); 
app.use("/api/mobile/otp", otpRoutes);



 
app.listen(5000,()=>console.log("working on 5000"));

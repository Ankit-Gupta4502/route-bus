const express=require("express");
const app=express();
const userRoute=require("./routes/user/user");
const sequelize = require("./util/database");
const ownerRoute = require("./routes/owner/owner");
const busRoute = require("./routes/bus/busDetails");
const otpRoutes=require("./middleware/otp");
const {BookingRelations,userRelation} = require("./relations/MobileApiRelations");
const User = require("./models/user/user");
const Bookings = require("./models/bus/Bookings");


require('dotenv').config();

app.use(express.json());

app.use("/api/mobile/user",userRoute);
app.use("/api/mobile/owner",ownerRoute);
app.use("/api/mobile/bus",busRoute); 
app.use("/api/mobile/otp", otpRoutes);

app.get("/bookings",async(req,res)=>{
    try {
        const res = await User.findAll({
            include:[{model:Bookings}]
        })
        return res.send({res})
    } catch (error) {
        return res.send({error})
    }
})

 
app.listen(5000,()=>console.log("working on 5000"));

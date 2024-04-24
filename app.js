const express=require("express");
const app=express();
const userRoute=require("./routes/user/user");
const sequelize = require("./util/database");
const User = require("./models/user/user");
const ownerRoute = require("./routes/owner/owner");
const busRoute = require("./routes/bus/busDetails");
const busOwner = require("./models/owner/owner");
const Bus = require("./models/bus/busDetails");
const Booking = require("./models/bus/bookings");
const otpRoutes=require("./middleware/otp");

require('dotenv').config();

app.use(express.json());

app.use("/user",userRoute);
app.use("/owner",ownerRoute);
app.use("/bus",busRoute); 
app.use("/otp", otpRoutes);

User.hasMany(Booking)
Booking.belongsTo(User)

busOwner.hasMany(Bus)
Bus.belongsTo(busOwner)

// sequelize.sync({force:true}) 
sequelize.sync() 
.then(()=>{
    app.listen(5000);
    console.log("listening");
}).catch(err=>console.log(err)); 
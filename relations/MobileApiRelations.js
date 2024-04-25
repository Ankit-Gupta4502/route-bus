const Bookings = require("../models/bus/Bookings")
const BusDetails = require("../models/bus/BusDetails")
const OwnerDetails = require("../models/owner/Owner")
const Users = require("../models/user/User");
const userRelation = Users.hasMany(Bookings,{
    foreignKey:"userID"
})
const BookingRelations = Bookings.belongsTo(Users)

const OwnerRelation = OwnerDetails.hasMany(BusDetails)
const BusRelation = BusDetails.belongsTo(OwnerDetails)

module.exports = {OwnerRelation,BusRelation,userRelation,BookingRelations};
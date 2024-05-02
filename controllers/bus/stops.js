const BusDetails = require("../../models/bus/BusDetails");
const Stops = require("../../models/bus/Stops");


exports.saveStops = async (req, res) => {
  const { busDetailsId, stops } = req.body;
  
  try {
    const busDetails = await BusDetails.findByPk(busDetailsId); 
    const baseDepartureTime = busDetails.departureTime; 
  console.log(baseDepartureTime,"oiuytrdfvbjkfgd")
    calculateExpectedArrivalTime(baseDepartureTime, stops);

    const stopData = await Promise.all(
      stops.map(async (stopData) => {
        await Stops.create({
          busDetailsId: busDetailsId,
          stopName: stopData.stopName,
          distanceFromSource: stopData.distanceFromSource,
          travelTime: stopData.travelTime,
          sequence: stopData.sequence,
          expectedArrivalTime: stopData.expectedArrivalTime, 
        });
        return stopData;
      })
    );

    return res.status(200).json({ message: "Stops saved to database successfully.", data: stopData });

  } catch (error) {
    console.error("Error saving stops to database:", error);
    throw error;
  }
};

function calculateExpectedArrivalTime(baseDepartureTime, stops) {
    console.log(typeof(baseDepartureTime),baseDepartureTime)
    let departureTime = new Date(`2000-01-01T${baseDepartureTime}`);
     console.log(departureTime)
     stops.forEach(stop => {
      // Split the travel time into hours and minutes
      const [hours, minutes] = stop.travelTime.split(':').map(Number);
      
      // Add hours and minutes to the departure time
      departureTime.setHours(departureTime.getHours() + hours);
      departureTime.setMinutes(departureTime.getMinutes() + minutes);

      const expectedArrivalTime = departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      stop.expectedArrivalTime = expectedArrivalTime;

      // Update departureTime for the next stop
      console.log(departureTime, stop, stop.travelTime);
  });

  return departureTime;
}

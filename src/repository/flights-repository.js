const { Flight }  = require('../models/index');

class FlightRepository {

    async createFlight(data) {
        try {
            const flights = await Flight.create(data);
            return flights;
        } catch (error) {
            const x = await Flight.create(data);
            console.log(x);
            console.log("something went wrong in repository layer!! for flights");
            throw {error};
        }
    }
}

module.exports = FlightRepository;

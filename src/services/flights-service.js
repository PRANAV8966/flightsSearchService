const {FlightRepository, AirplaneRepository} = require('../repository/index');

class FlightService {

    constructor() {
        this.AirplaneRepository = new AirplaneRepository();
        this.FlightRepository = new FlightRepository();
    }

    async createFlights(data) {
        try {
            const airplanes = await this.AirplaneRepository.getAirplane(data.airplaneID);
            const flights = await this.FlightRepository.createFlight({
                ...data, totalSeats: airplanes.capacity
            });
            console.log("check at service layer for flights");
            return flights;
        } catch (error) {
            console.log("error at service layer!! for flights");
            throw {error};
        }
    }

}

module.exports = FlightService;
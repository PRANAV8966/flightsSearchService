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
            return flights;
        } catch (error) {
            console.log("error at service layer!! for flights" );
            throw error;
        }
    }

    async getFlight(data) {
        try {
            const flight = await this.FlightRepository.getFlight(data);
            return flight;
        } catch (error) {
            console.log("error at service layer!! for flights");
            throw {error};
        }
    }

    async getAllFlights(data) {
        try {
            const flights = await this.FlightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log("error at service layer!! for flights");
            throw {error};
        }

    }
    async updateFlight(flightId, data) {
        try {
            const response = await this.FlightRepository.updateFlight(flightId, data);
            return response;
        } catch (error) {
            console.log('error while updating flights');
            throw {error};
        }
    }

    async deleteFlight(flightId) {
        try {
            await this.FlightRepository.delete(flightId);
            return true;
        } catch (error) {
            console.log('error while deleting flight at service', error);
            throw error;
        }
    }

}

module.exports = FlightService;
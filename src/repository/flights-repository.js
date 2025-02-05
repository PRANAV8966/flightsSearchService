const { Flight }  = require('../models/index');


class FlightRepository {

    #createFilter() {
        // filter function for fetching flights based on custom filters
        let filter = {};
    }

    async createFlight(data) {
        try {
            const flights = await Flight.create(data);
            return flights;
        } catch (error) {
            throw {error};
        }
    }

    async getFlight(FlightId) {
       try {
            const flight = await Flight.findByPk(FlightId);
            return flight;
       } catch (error) {
            throw {error};
       }
    }

    async getAllFlights() {
       try {
            const flights = await Flight.findAll();
            return flights;
       } catch (error) {
            throw {error};
       }
    }
}

module.exports = FlightRepository;

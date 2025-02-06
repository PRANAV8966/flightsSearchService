const { Flight }  = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

        #createFilter(data) {
        // filter function for fetching flights based on custom filters
        let filter = {};
        let priceFilter = [];

        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice) {
            // Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
            priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            // Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
            priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        // if(data.minPrice && data.maxPrice) {
        //     Object.assign(filter, {[Op.and]: {
        //         price: {[Op.gte]: data.minPrice}, 
        //         price: {[Op.lte]: data.maxPrice}
        //     }});
        // }
        Object.assign(filter, { [Op.and]: priceFilter });
        return filter;
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

    async getAllFlights(filterData) {
       try {
            const filterObject = this.#createFilter(filterData);
            const flights = await Flight.findAll({
                where:filterObject
            });
            return flights;
       } catch (error) {
            throw {error};
       }
    }
}

module.exports = FlightRepository;
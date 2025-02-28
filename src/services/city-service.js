const {cityRepository} = require('../repository/index');

class cityService {
    constructor() {
        this.cityRepository = new cityRepository();
    }

    async createCity(name) {
        try {
            const City = await this.cityRepository.createCity(name);
            return City;
        } catch (error) {
            console.log("error at service layer!!");
            throw {error};
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("error at service layer!!");
            throw {error};
        }
    }

    async updateCity(cityId, data) {
        try {
            const City =  await this.cityRepository.updateCity(cityId, data);
            return City;
        } catch (error) {
            console.log("error at service layer!!");
            throw {error};
        }
    }

    async getCity(cityId) {
        try {
            const City = await this.cityRepository.getCity(cityId);
            return City;
        } catch (error) {
            console.log("error at service layer!!");
            throw {error};
        }
    }

    async findAll(filter) {
        try {
            const Cities = await this.cityRepository.findAll({name: filter.name});
            return Cities;
        } catch (error) {
            console.log("error at service layer!!");
            throw {error};
        }
    }
}

module.exports = cityService;
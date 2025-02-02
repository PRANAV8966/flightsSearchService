const {city} = require('../models/index.js');


class cityRepository {

    // fucntion to create a new city entry  in DB
    async createCity({name}) {
        try{
            const City = await city.create({name});
            return City;
        } catch (error) {
            console.log("something went wrong!!");
            throw {error};
        }
    }

    // function to delete a existing city
    async deleteCity(cityId) {
        try{
            await city.destroy({
                where: {
                    id: cityId
                }
            });
        }catch (error) {
            console.log("something went wrong!!");
            throw {error};
        }
    }

    // function to update an existing city 
    async updateCity(cityId, data) {
        try {
            const City =  await city.update(data, {
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("something went wrong!!");
            throw {error};
        }
    }
    
    // function to find a city
    async getCity(cityId) {
        try {
            const City = await city.findByPk(cityId);
            return City;
        } catch (error) {
            console.log("something went wrong!!");
            throw {error};
        }
    }
}

module.exports = cityRepository;
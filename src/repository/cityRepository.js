const {city} = require('../models/index.js');


class cityRespository {

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
                    Id: cityId
                }
            });
        }catch (error) {
            console.log("something went wrong!!");
            throw {error};
        }
    }

    // function to update an existing city 
    async updateCity(cityId, {data}) {
        try {
            const City =  city.update(cityId, {
                where: {
                    id: cityId
                }
            })
        } catch (error) {
            console.log("something went wrong!!");
            throw {error};
        }
    }
    
    // function to find a city
    async getCity(cityId) {
        try {
            const City = city.findbypk(cityId);
            return City;
        } catch (error) {
            console.log("something went wrong!!");
            throw {error};
        }
    }
}

module.exports = cityRespository;
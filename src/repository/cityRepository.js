const {city} = require('../models/index.js');


class cityRespository {
    async createCity({name}) {
        try{
            const City = await city.create({name});
            return City;
        } catch (error) {
            throw {error};
        }
    }
    async deleteCity({cityId}) {
        try{
            await city.destroy({
                where: {
                    Id: cityId,
                }
            });
        }catch (error) {
            throw {error};
        }
    }
}

module.exports = cityRespository;
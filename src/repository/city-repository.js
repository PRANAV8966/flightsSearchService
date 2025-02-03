const { Op } = require('sequelize');
const {city} = require('../models/index.js');

class cityRepository {

    // fucntion to create a new city entry  in DB
    async createCity({name}) {
        try{
            const City = await city.create({
                name
            });
            return City;
        } catch (error) {
            console.log("something went wrong in repository layer!!");
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
            console.log("something went wrong in repository layer!!");
            // throw {error};      
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
            return City;
        } catch (error) {
            console.log("something went wrong in repository layer!!");
            throw {error};
        }
    }
    
    // function to find a city
    async getCity(cityId) {
        try {
            const City = await city.findByPk(cityId);
            return City;
        } catch (error) {
            console.log("something went wrong in repository layer!!");
            throw {error};
        }
    }

    async findAll(filter) { //filer can be empty also.
        try {
            if (filter.name) {
                const Cities = await city.findAll({
                    where: {
                        name : {
                            [Op.startsWith]: filter.name
                        }
                }
                });
                return Cities;
            }
            const Cities = await city.findAll();
            return Cities;
        } catch (error) {
            console.log("something went wrong in repository layer!!");
            throw {error};
        }
    }

}

module.exports = cityRepository;
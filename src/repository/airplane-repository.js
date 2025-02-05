const {airplane} = require('../models/index');


class AirplaneRepository {

    async getAirplane(id)  {
        try {
            const Airplane = await airplane.findByPk(id);
            return Airplane;
        } catch (error) {
            throw {error};
        }
    }

}

module.exports = AirplaneRepository;
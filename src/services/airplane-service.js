const crudService  = require('./crud-service');
const { AirplaneRepository } = require('../repository/index');

class AirplaneService extends crudService{
    constructor() {
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository);
    }
}

module.exports = AirplaneService;
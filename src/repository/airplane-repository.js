const crudRepository = require('./crud-repository');
const { airplane } = require('../models/index');

class AirplaneRepository extends crudRepository {
    constructor()  {
        super(airplane);
    }
}

module.exports = AirplaneRepository;
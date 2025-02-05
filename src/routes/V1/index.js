const express = require('express');
const { CityController, flightController } = require('../../controllers/index');


const router = express.Router();


router.get('/city', CityController.getAll);
router.get('/city/:id', CityController.getCity);

router.get('/flights', flightController.getAllFlights);
router.get('/flight', flightController.getFlight);


router.post('/city', CityController.create);

router.post('/flights', flightController.create);


router.patch('/city/:id', CityController.update);


router.delete('/city/:id', CityController.destroy);

module.exports = router;
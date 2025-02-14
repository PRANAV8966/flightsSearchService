const express = require('express');
const { CityController, flightController, airportController } = require('../../controllers/index');
const { compareData } = require("../../middlewares/index");


const router = express.Router();


router.get('/city', CityController.getAll);
router.get('/city/:id', CityController.getCity);

router.get('/flights', flightController.getAllFlights);
router.get('/flight', flightController.getFlight);

router.get('/airports', airportController.getAll);


router.post('/city', CityController.create);

router.post('/flights',compareData.compareData, flightController.create);

router.post('/airports', airportController.create);


router.patch('/city/:id', CityController.update);


router.delete('/city/:id', CityController.destroy);

module.exports = router;
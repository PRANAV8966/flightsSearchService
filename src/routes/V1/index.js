const express = require('express');
const { CityController, flightController, airportController, airplaneController } = require('../../controllers/index');
const { compareData, isValidPrice } = require("../../middlewares/index");



const router = express.Router();

router.get('/city/:id', CityController.getCity);
router.get('/city', CityController.getAll);


router.get('/flights', flightController.getAllFlights);
router.get('/flight/:id', flightController.getFlight);

router.get('/airports', airportController.getAll);


router.post('/city', CityController.create);

router.post('/flights', isValidPrice.isValidPrice ,compareData.compareData, flightController.create);

router.post('/airports', airportController.create);

router.post('/airplane', airplaneController.create);


router.patch('/city/:id', CityController.update);
router.patch('/flight/:id', flightController.updateFlight);

router.delete('/city/:id', CityController.destroy);

router.delete('/airplane/:id', airplaneController.Delete);

module.exports = router;
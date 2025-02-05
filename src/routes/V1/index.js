const express = require('express');
const { CityController, flightController } = require('../../controllers/index');


const router = express.Router();

// router.post('/city', CityController.create);

// router.get('/city', CityController.getAll);
// router.get('/city/:id', CityController.getCity);

// router.delete('/city/:id', CityController.destroy);

// router.patch('/city/:id', CityController.update);

router.post('/flights', flightController.create)


module.exports = router;
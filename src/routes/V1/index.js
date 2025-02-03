const express = require('express');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city', CityController.create);

router.get('/city', CityController.getAll);
router.get('/city/:id', CityController.getCity);

router.delete('/city/:id', CityController.destroy);

router.patch('/city/:id', CityController.update);


module.exports = router;
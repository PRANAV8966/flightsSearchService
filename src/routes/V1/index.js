const express = require('express');
const CityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city', CityController.create);
router.get('/all/:id', CityController.getCity);
router.delete('/all/:id', CityController.destroy);

module.exports = router;
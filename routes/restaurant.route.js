var express = require('express');
var router = express.Router();
var restaurantController = require('./../controllers/restaurant.controller');
router.get('/list', restaurantController.RestaurantsList);
module.exports = router;

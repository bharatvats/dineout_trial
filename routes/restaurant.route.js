var express = require('express');
var router = express.Router();
var RestaurantController = require('./../controllers/restaurant.controller');
var Restaurant = new RestaurantController();
router.get('/list', Restaurant.RestaurantsList);
router.get('/getDetails/:restaurantId', Restaurant.getRestaurantDetails);
module.exports = router;
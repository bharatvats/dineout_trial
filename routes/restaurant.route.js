var express = require('express');
var router = express.Router();
var RestaurantController = require('./../controllers/restaurant.controller');
var Restaurant = new RestaurantController();
router.get('/list', Restaurant.RestaurantsList);
router.get('/getDetails/:restaurantId', Restaurant.getRestaurantDetails);
router.get('/restaurantWithOffer/:restaurantId/:offerId', Restaurant.restaurantWithOffer);
module.exports = router;
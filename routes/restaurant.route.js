var express = require('express');
var router = express.Router();
var RestaurantController = require('./../controllers/restaurant.controller');
var Restaurant = new RestaurantController();
router.get('/list', Restaurant.RestaurantsList);
router.get('/getDetails/:restaurantId', Restaurant.getRestaurantDetails);
router.get('/restaurantWithOffer/:restaurantId/:offerId', Restaurant.restaurantWithOffer);
router.post('*', function(req, res, next) {
    let validatestatus = 'Not Allowed!';
    res.status(400).send({status: validatestatus});
  })
  router.get('*', function(req, res, next) {
    let validatestatus = 'Not Allowed!';
    res.status(400).send({status: validatestatus});
  })
  router.put('*', function(req, res, next) {
    let validatestatus = 'Not Allowed!';
    res.status(400).send({status: validatestatus});
  })
  router.patch('*', function(req, res, next) {
    let validatestatus = 'Not Allowed!';
    res.status(400).send({status: validatestatus});
  })
  router.delete('*', function(req, res, next) {
    let validatestatus = 'Not Allowed!';
    res.status(400).send({status: validatestatus});
  })
module.exports = router;
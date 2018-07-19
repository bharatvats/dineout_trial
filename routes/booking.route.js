var express = require('express');
var router = express.Router();
var BookingController = require('./../controllers/booking.controller');
var booking = new BookingController();
router.post('/create', booking.createBooking);
router.post('/getRestaurantBookingDetails', booking.getRestaurantBookingDetails);
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
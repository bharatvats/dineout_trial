var express = require('express');
var router = express.Router();
var BookingController = require('./../controllers/booking.controller');
var booking = new BookingController();
router.post('/create', booking.createBooking);
module.exports = router;
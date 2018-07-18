var express = require('express');
var router = express.Router();
var OfferController = require('./../controllers/offer.controller');
var offer = new OfferController();
router.get('/getAllOffers/:restaurantId', offer.getAllOffers);
router.get('/getOffersDetail/:offerId', offer.getOfferDetail);
module.exports = router;
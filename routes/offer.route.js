var express = require('express');
var router = express.Router();
var OfferController = require('./../controllers/offer.controller');
var offer = new OfferController();
router.get('/getAllOffers/:restaurantId', offer.getAllOffers);
router.get('/getOffersDetail/:offerId', offer.getOfferDetail);
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
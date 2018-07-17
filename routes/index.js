var express = require('express');
var router = express.Router();

var { con } = require('./../server/mysql_connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

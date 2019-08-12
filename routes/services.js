var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('services');

});

module.exports = router;

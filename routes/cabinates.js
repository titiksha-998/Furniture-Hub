var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/cabinates', function(req, res, next) {
  res.render('cabinates');

});

module.exports = router;

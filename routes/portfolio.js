var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');

});

module.exports = router;

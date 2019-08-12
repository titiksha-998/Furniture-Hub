var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sofa', function(req, res, next) {
  res.render('sofa');

});

module.exports = router;

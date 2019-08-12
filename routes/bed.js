var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bed', function(req, res, next) {
  res.render('bed');

});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/doors', function(req, res, next) {
  res.render('doors');

});

module.exports = router;

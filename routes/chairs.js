var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/chairs', function(req, res, next) {
  res.render('chairs');

});

module.exports = router;

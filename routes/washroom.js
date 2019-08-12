var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/washroom', function(req, res, next) {
  res.render('washroom');

});

module.exports = router;

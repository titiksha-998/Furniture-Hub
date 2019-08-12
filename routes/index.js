var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });

});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });

});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Express' });

});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Express' });

});

router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Express' });

});

router.get('/cabinates', function(req, res, next) {
  res.render('cabinates', { title: 'Express' });

});

router.get('/bed', function(req, res, next) {
  res.render('bed', { title: 'Express' });

});

router.get('/chairs', function(req, res, next) {
  res.render('chairs', { title: 'Express' });

});
router.get('/doors', function(req, res, next) {
  res.render('doors', { title: 'Express' });

});
router.get('/sofa', function(req, res, next) {
  res.render('sofa', { title: 'Express' });

});
router.get('/washroom', function(req, res, next) {
  res.render('washroom', { title: 'Express' });

});
router.get('/sign', function(req, res, next) {
  res.render('sign', { title: 'Express' });

});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });

});




module.exports = router;

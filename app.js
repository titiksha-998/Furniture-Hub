var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');

var about= require('./routes/about');
var contact= require('./routes/contact');
var services=require('./routes/services');
var team=require('./routes/team');
var portfolio=require('./routes/portfolio');
var cabinates=require('./routes/cabinates');
var bed=require('./routes/bed');
var chairs=require('./routes/chairs');
var doors=require('./routes/doors');
var sofa=require('./routes/sofa');
var washroom=require('./routes/washroom');
var sign=require('./routes/sign');
var signup=require('./routes/signup');
var mongoose = require('mongoose');
var product = require('./routes/product');

mongoose.connect('mongodb://localhost/meanstack',{useNewUrlParser: true});

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/about', about);
app.use('/contact', contact);
app.use('/services', services);
app.use('/team', team);
app.use('/portfolio', portfolio);
app.use('/cabinates', cabinates);
app.use('/bed', bed);
app.use('/chairs', chairs);
app.use('/doors', doors);
app.use('/sofa', sofa);
app.use('/sign', sign);
app.use('/washroom', washroom);
app.use('/signup', signup);
app.use('/product', product);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

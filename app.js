require('dotenv').config('/.env')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/**Routers*/
var countryRouter = require('./data/country/country.router');
var usersRouter = require('./routes/users');
const regionsRouter = require('./data/regions/regions.router')
const usaRouter = require('./data/country/USA/usa.router')
const authRouter = require('./routes/auth/auth.router')
var app = express();
var cors = require("cors");

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth',authRouter)
app.use('/country', countryRouter);
app.use('/users', usersRouter);
app.use('/regions',regionsRouter)
app.use('/usa_regions',usaRouter)
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

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// const indexRouter = require('./routes/authors');
const books = require('./routes/books');
const authors = require('./routes/authors');
const users = require('./routes/users');

const cors = require('cors');
const app = express();

// db connecting
const db = require('./helper/db')();

// Config
const config = require('./config');
app.set('api_secret_key', config.api_secret_key);

// Token Verify Middleware
const tokenVerify = require('./token_verify_middleware');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/books', books);
app.use('/api', tokenVerify);
app.use('/', users);
app.use('/api/authors', authors);

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

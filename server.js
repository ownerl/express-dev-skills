var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var skillsRouter = require('./routes/skills');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// added middleware
app.use(function(req,res,next) {
  console.log('middleware works!');
  // adding a time property to the res.locals object
  // it will be passed on (accessible) to subsequent middleware like res.render in the controller function\
  res.locals.time = new Date().toLocaleTimeString();
  next();
})

// Middleware flows in order its mounted

// app.use([stars with path], <middleware fn> [, <middleware fn>])   stuff in [] is optional. the 2nd and later middleware in [] might no run if the first doesnt do "next();"

// console logs "GET /index" or "GET /skills" etc...
app.use(logger('dev')); 
// process data sent in the body of the request, if its json
app.use(express.json());
// processes data sent in 'form' body of the request
// if form data exists, it will create a property on a req.body for each <input>, <select> or <textarea> in the <form>
app.use(express.urlencoded({ extended: false }));
// add a cookies property for each cookie sent in the request
app.use(cookieParser());
// if the request is for a static asset (eg. css, image, audio, etc), it returns the file
app.use(express.static(path.join(__dirname, 'public')));
// method override to change POST to PUT or DELETE or whatevs
app.use(methodOverride('_method')); // query parameter can be anything, _method is unlikely to affect anything else

app.use('/', indexRouter);
app.use('/skills', skillsRouter);

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

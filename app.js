var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var session = require('express-session');


var indexRouter = require('./routes/index');
var articleList = require('./routes/article/list');
var articleAdd = require('./routes/article/add');
var articleDetail = require('./routes/article/detail');
var articleUpdate = require('./routes/article/update');
var articleDelete = require('./routes/article/delete');
var login = require('./routes/reglog/login');
var logout = require('./routes/reglog/logout');
var register = require('./routes/reglog/register');
var myself = require('./routes/my/myself');
var search = require('./routes/search');
var pictureList = require('./routes/picture/list');
var pictureAdd = require('./routes/picture/add');
var pictureDetail = require('./routes/picture/detail');
var pictureBigImage = require('./routes/picture/bigimage');
var uploadImage = require('./routes/uploads');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);


app.use(session({
    secret: 'keyboard cat',
    name: "user",
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60},
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

//权限判定
app.use(function (req, res, next) {
    var url = req.originalUrl;
    if (url != "/" && url != "/reg/login" && url != "/reg/register" && !req.session.user) {
        return res.redirect("/");
    }
    res.locals.user = req.session.user;
    res.locals.message = '';
    next();
});


app.use('/', indexRouter);
app.use('/', articleList);
app.use('/', articleAdd);
app.use('/', articleDetail);
app.use('/', articleUpdate);
app.use('/', articleDelete);
app.use('/', login);
app.use('/', logout);
app.use('/', register);
app.use('/', myself);
app.use('/', search);
app.use('/', pictureList);
app.use('/', pictureAdd);
app.use('/', pictureDetail);
app.use('/', pictureBigImage);
app.use('/', uploadImage);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
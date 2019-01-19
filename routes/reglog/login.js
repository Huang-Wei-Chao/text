var express = require('express');
var router = express.Router();
const {User} = require('../../models/User');


//跳转至登录页面
router.get('/reg/login', function (req, res, next) {
    res.render('reg/login')
});


/*登录cookie*/
router.get('/home', function (req, res, next) {
    req.user = req.session.user;
    console.log(req.user);
    res.render('home');
});


/*登录*/
router.post('/reg/login', function (req, res, next) {
    var username = req.body.userName;
    var password = req.body.passWord;
    User.findOne({
        where: {
            userName: username,
            passWord: password,
        }
    }).then(data => {
        if (data) {
            req.session.user = {username: username, password: password};
            res.redirect('/home')
        } else {
            req.error = '用户名或者密码错误';
            res.render('reg/login', req);
        }
    });
});



module.exports = router;
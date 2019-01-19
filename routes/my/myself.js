var express = require('express');
var router = express.Router();
const {User} = require('../../models/User');


//跳转至个人中心
router.get('/my/myself', function (req, res, next) {
    res.render('my/myself');
});


//修改密码
router.post('/my/myself', function (req, res, next) {
    var pwd = {
        passWord: req.body.newPwd,
        passWordRepeat: req.body.newPwd,
        oldPwd: req.body.oldPwd,
    };
    User.findOne({
        where: {
            userName: req.session.user.username,
            passWord: pwd.oldPwd,
        }
    }).then(data => {
        if (data) {
            User.update(pwd, {
                where: {
                    userName: req.session.user.username,
                    passWord: pwd.oldPwd,
                }
            }).then(data => {
                console.log(data);
                delete req.session.user;
                res.redirect('/reg/login');
            });
        } else {
            res.render('my/myself');
        }
    });
});


module.exports = router;
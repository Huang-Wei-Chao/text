var express = require('express');
var router = express.Router();
const {User} = require('../../models/User');


//跳转至注册页面
router.get('/reg/register', function (req, res, next) {
    res.render('reg/register')
});


/*注册*/
router.post('/reg/register', function (req, res, next) {
    var user = {
        userName: (req.body.userName).replace(/\s/g, ""),
        passWord: req.body.passWord,
        passWordRepeat: req.body.passWordRepeat,
    };
    User.findOne({
        where: {
            userName: user.userName,
        }
    }).then(data => {
        if (!data) {
            User.create(user).then(data => {
                console.log(data);
                res.redirect('/reg/login');
            })
        } else {
            req.error = '用户名已存在，请重试';
            res.render('reg/register', req);
        }
    });
});




module.exports = router;
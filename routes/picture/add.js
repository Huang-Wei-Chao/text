var express = require('express');
var router = express.Router();
const {Image} = require('../../models/Images');


router.get('/picture/add', function (req, res, next) {
    res.render('picture/add');
}).post('/picture/add', function (req, res, next) {
    var images = {
        avatarName: req.body.imageData,
        releaseDate: new Date(),
        author: req.session.user.username,
    };
    console.log('avatarName:' + images.avatarName);
    Image.create(images).then(data => {
        //console.log(data);
        res.redirect('/picture/list');
    })
});

module.exports = router;
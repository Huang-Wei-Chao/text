var express = require('express');
var router = express.Router();
const {Image} = require('../../models/Images');


router.get('/picture/list', function (req, res, next) {
    Image.findAll({
        where: {
            author: req.session.user.username
        }
    }).then(data => {
        console.log(data);
        res.render('picture/list', {imagesItemList: data});
    })

});

module.exports = router;
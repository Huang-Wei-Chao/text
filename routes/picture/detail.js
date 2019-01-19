var express = require('express');
var router = express.Router();
const {Image} = require('../../models/Images');

router.get('/picture/detail/:id', function (req, res, next) {

    Image.findOne({
        where: {
            id: req.params.id
        },
    }).then(data => {
        res.render('picture/detail', {imagesItemOne: data});
    });

});

module.exports = router;
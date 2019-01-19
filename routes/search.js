var express = require('express');
var router = express.Router();
const {Article} = require('../models/Article');


router.get('/search', function (req, res, next) {
    var keyword = req.query.keyWord;
    var kw = req.session.KW = {keyword: keyword};
    Article.findAll({
        where: {
            $or: {
                title: {$like: '%' + keyword + '%'},
                content: {$like: '%' + keyword + '%'},
            }
        }
    }).then(data => {

        console.log('keyword=' + kw.keyword);
        res.render('search', {searchItems: data})
    })
});


module.exports = router;
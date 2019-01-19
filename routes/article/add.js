var express = require('express');
var router = express.Router();
const {Article} = require('../../models/Article');


/*跳转至add页面*/
router.get('/article/add', function (req, res, next) {
    res.render('article/add');
});


router.post('/article/add', function (req, res, next) {
    var article = {
        title: req.body.title,
        author: req.session.user.username,
        releaseDate: new Date(),
        content: req.body.imageData,
    };
    console.log('title:' + article.title);
    console.log('content:' + article.content);
    Article.create(article).then(data => {
        console.log(data);
        res.redirect('/article/list');
    })
});


module.exports = router;

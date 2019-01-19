var express = require('express');
var router = express.Router();
const {Article} = require('../../models/Article');


/*更新文章*/
router.get('/article/update', function (req, res, next) {
    Article.findOne({
        where: {
            id: req.query.id
        },
    }).then(data => {
        res.render('article/update', {itemOne: data})
    });
}).post('/article/update', function (req, res, next) {
    var article = {
        title: req.body.title,
        content: req.body.content,
    };
    Article.update(article, {
        where: {
            id: req.query.id
        },
    }).then(data => {
        console.log(data);
        res.redirect('/article/list');
    });
});


module.exports = router;
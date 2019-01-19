var express = require('express');
var router = express.Router();
const {Article} = require('../../models/Article');


/*查看文章详情*/
router.get('/article/detail/:id', function (req, res, next) {
    Article.findOne({
        where: {
            id: req.params.id
        },
    }).then(data => {
        res.render('article/detail', {itemOne: data});
        console.log(data);
    });
});


module.exports = router;
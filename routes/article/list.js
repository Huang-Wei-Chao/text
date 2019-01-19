var express = require('express');
var router = express.Router();
const {Article} = require('../../models/Article');


//获取文章列表
router.get('/article/list', function (req, res, next) {
    Article.findAll({
        where: {
            author: req.session.user.username
        }
    }).then(data => {
        console.log(data);
        res.render('article/list', {articleItems: data});
    })
});

// router.get('/article/list', function (req, res, next) {
//     var page= 2;
//     var pageSize=2;
//     Article.findAndCountAll({
//         where: {
//             author: req.session.user.username
//         },
//         limit: pageSize,
//         offset: (page - 1) * pageSize,
//     }).then(data => {
//        // console.log(data);
//         //res.send(res,{rows:article.rows,total:article.count});
//         res.render('article/list', {articleItems: data});
//     })
// });


module.exports = router;
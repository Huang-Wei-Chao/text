var express = require('express');
var router = express.Router();
const {Article} = require('../models/Article');


/* GET home page. */
/*进入网站首页*/
router.get('/', function (req, res, next) {
        res.render('index');
});

//渲染“最新文章列表”
router.get('/home', function (req, res, next) {
    Article.findAll({
        where: {
            author: req.session.user.username
        }
    }).then(data => {
        console.log(data);
        res.render('home', {articleItems: data});
    })
});









module.exports = router;


/*添加数据*/
// router.get('/index',function (req,res,next) {
//     let articles=[];
//     for (let i=0;i<10;i++){
//         let article={
//             title:'标题'+i,
//             content:'正文'+i
//         }
//         articles.push(article)
//     }
//     Article.bulkCreate(articles).then(data=>{
//         res.render('index',{items: data})
//     })
// })


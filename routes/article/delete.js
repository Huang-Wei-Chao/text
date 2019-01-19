var express = require('express');
var router = express.Router();
const {Article} = require('../../models/Article');


/*删除数据*/
router.get('/article/delete', function (req, res, next) {
    Article.findOne({
        where: {
            id: req.query.id
        },
    }).then(data => {
        data.destroy().then(() => {
            console.log('delete success');
            res.redirect('/article/list')
        });
    });
});



module.exports = router;
var express = require('express');
var router = express.Router();



router.get('/picture/bigimage',function (req,res,next) {
    res.render('picture/bigimage');
});

module.exports=router;
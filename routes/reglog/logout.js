var express = require('express');
var router = express.Router();


/*注销*/
router.get('/logout', function (req, res, next) {
    delete req.session.user;
    res.render('index');
});


module.exports = router;
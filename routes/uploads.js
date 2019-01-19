var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');


/*上传图片*/
router.post('/uploads', function (req, res, next) {
    res.header('Content-Type', 'text/javascript;charset=utf-8');
    var form = new formidable.IncomingForm();
    form.uploadDir = "./public/images/uploads/";
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;
    form.parse(req, function (err, fields, files) {
        if (err) {
            res.render('/uploads',);
            return;
        }
        var extName = '';
        switch (files.imageData.type) {
            case 'image/jpeg':
                extName = 'jpeg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/gif':
                extName = 'gif';
                break;
        }
        var avatarName = new Date().getTime() + '.' + extName;
        var newPath = form.uploadDir + avatarName;
        var imageUrl = '/images/uploads/' + avatarName;
        console.log('newPath:' + newPath);
        console.log('imageUrl:' + imageUrl);
        fs.renameSync(files.imageData.path, newPath);
        res.send({
            code: 200,
            msg: imageUrl,
        });
    });
});


module.exports = router;

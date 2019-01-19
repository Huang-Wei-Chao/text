/* 本文件为Node.js服务，后面引述时简称SERVER
 * 在根路径使用的ejs模板文件upload.html，简称 HTML
 * HTML中引用的upload.js为我们使用qiniu-js-sdk和Plupload的具体文件，简称HTMLJS
 */
var qiniu = require('qiniu');
var express = require('express');
var config =  {
    'ACCESS_KEY': '_qLyM-iub82NF2D2eLKFx0Lk5PrjqlIB7-1jEb1K',
    'SECRET_KEY': 'cqmS2AJHhIldliejhi30TAJdiaBXmp4xhJHw0z-g',
    'Bucket_Name': 'yxxxxxxxxd',
    'Port': 19110,
    'Uptoken_Url': 'uptoken',
    'Domain': 'http://xxxxxxxxxx.bkt.clouddn.com/'
};
var app = express();
// 使用static中间件提供静态资源服务，返回启动node服务的当前目录的静态资源
app.use(express.static(__dirname + '/'));
// ejs引擎配置
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);

/* 前端qiniu js-sdk初始化时请求的url，这个路径是自定义的，可以定义为任意值。目前流程是：
 * 在HTML中使用的HTMLJS中使用了qiniu-js-sdk，引入了qiniu-js-sdk之后执行 Qiniu.uploader({...})时立
 * 即执行初始化，初始化时会使用uptoken_url的方式向SERVER请求token，而这个uptoken_url的地址是HTML中
 * 的$('#uptoken_url').val()，而'#uptoken_url'的值是ejs套HTML模板的时候用config.Uptoken_Url填
 * 充的（见下下方app.get('/', function(req, res) {...}部分），所以在上面的config中给Uptoken_Url设
 * 置了什么样的字符串值，下面处理token的接口就使用什么字符串。
 */
app.get('/uptoken', function(req, res, next) {
    // 使用七牛Node.js的sdk从七牛获得的token：new qiniu.rs.PutPolicy(config.Bucket_Name);
    var token = uptoken.token();
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        // 返回给前端qiniu-js-sdk初始化时使用的token
        res.json({
            uptoken: token
        });
    }
});

app.get('/', function(req, res) {
    // 使用ejs模板引擎渲染HTML页面，塞domain和uptoken_url的值进去
    res.render('upload.ejs', {
        domain: config.Domain,
        uptoken_url: config.Uptoken_Url
    });
});

qiniu.conf.ACCESS_KEY = config.ACCESS_KEY;
qiniu.conf.SECRET_KEY = config.SECRET_KEY;

var uptoken = new qiniu.rs.PutPolicy(config.Bucket_Name);

app.listen(config.Port, function() {
    console.log('Listening on port %d', config.Port);
});

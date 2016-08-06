var http = require('http');
var fs = require('fs');
var url = require('url',true);
var path = require('path');
var mime = {
    '.js':'text/javascript',
    '.css':'text/css',
    '.html':'text/html',
    '.jpg':'image/jpeg'
};
http.createServer(function (request,response) {
    //req.url
    console.log(request.url);//获取请求路径
    console.log(request.method);//获取请求方法
    console.log(request.headers);//获取请求头
    //true是将字符串转换成对象
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        response.setHeader('content-type','text/html;charset=utf8');
        response.statusCode = 200;
        fs.createReadStream('./1.html').pipe(response);
    }else{
        //通过访问路径来判断什么类型
        //   /public/style.css  => text/css urlObj.pathname = > ./public/style.css
        //   /public/index.js  => text/javascript => ./public/index.js
        response.setHeader('content-type',mime[path.extname(urlObj.pathname)]+';charset=utf8');
        fs.createReadStream('.'+pathname).pipe(response);
    }



}).listen(8888);
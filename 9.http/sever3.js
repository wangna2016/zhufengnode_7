var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime'); //第三方模块
http.createServer(function (request,response) {
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        response.setHeader('content-type','text/html;charset=utf8');
        response.statusCode = 200;
        fs.createReadStream('./1.html').pipe(response);
    }else{
        //查看文件是否存在，不存在返回404
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            response.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(response);
        }else{
            //没有设置404 并且断掉电话
            response.statusCode = 404;
            response.end('');
        }
    }
}).listen(8888);
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime');
var user = [];
var querystring = require('querystring');
http.createServer(function (request,response) {
    //通过curl -X POST http://localhost:8888;
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        response.setHeader('content-type','text/html;charset=utf8');
        response.statusCode = 200;
        fs.createReadStream('./1.html').pipe(response);
    }else if(pathname=='/reg'){
        //我们要接受post请求了，放入到请求体中
        var result = '';
        request.on('data',function (data) {
            result+=data;
        })
        request.on('end',function () {
            //username=234&password=432 需要转换成对象格式{username:235,password:432}
            user.push(querystring.parse(result));
            response.end(JSON.stringify(user));//解析好后返回一个对象格式字符串
        })
    }else{
        var flag = fs.existsSync('.'+pathname);
        if(flag){
            response.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(response);
        }else{
            response.statusCode = 404;
            response.end('');
        }
    }
}).listen(8888);
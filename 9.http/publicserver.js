var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mime = require('mime');
http.createServer(function (request,response) {
    //通过curl -X POST http://localhost:8888;
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        response.setHeader('content-type','text/html;charset=utf8');
        response.statusCode = 200;
        fs.createReadStream('./1.html').pipe(response);
    }else if(pathname =='/clock'){
        response.end(JSON.stringify({time:new Date().toLocaleString()}))
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
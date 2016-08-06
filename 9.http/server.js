//创建服务需要http模块 http是核心模块  string_decorder util url querystring fs ..... events
var http = require('http');
//服务器端通过特定ip和端口 响应数据
/**
 * request是请求
 * response是响应
 */
var fs = require('fs');
http.createServer(function (request,response) {
    //response是一个可写流，他也是可读流
    //设置响应格式 content-type
    /*response.writeHead(200,{'content-type':'text/plain;charset=utf8'});*/
    response.setHeader('content-type','text/html;charset=utf8');
    response.statusCode = 200;
    //response.write('你好'); //因为电话没挂掉
    //response.end('完成');
    //响应文件
    //创建一个读的流 直接导入到写的流 pipe
    fs.createReadStream('./1.html').pipe(response);
    /*var data = fs.readFileSync('./1.html');
    response.end(data);*/
}).listen(8080);
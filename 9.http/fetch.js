//当我们访问后台时，后台请求 baijia.com 请求后拼装好页面 将页面返回给我们的客户端
var http = require('http');
http.createServer(function (req,res) {
    //node有get方法,你请求别人的页面 别人的服务器会响应给你数据
    var tmpl = `<!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Title</title>
        </head>
        <body>
            <div></div>
        </body>
        </html>`;
    http.get('http://baijia.baidu.com/',function (response) {
        var result = '';
        response.on('data',function (data) {
            result += data;
        });
        response.on('end',function () {
            var h3arr = result.match(/<h5[\s\S]*?<\/h5>/g);
            var lis = '';
            h3arr.forEach(function (item) {
                lis+='<li>';
                lis+=item;
                lis+='</li>';
            });
            //替换好的新页面返回为我们的页面
            res.end(tmpl.replace('<div></div>',lis));
        });
    })
}).listen(8888);
//实现一个增删改查 通过ajax 和 http
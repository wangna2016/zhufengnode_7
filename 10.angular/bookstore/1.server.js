var http = require('http');
var url = require('url');
var fs = require('fs');
var mime = require('mime');
var  books = [
    {name:'nodeJs',price:50,count:1,select:true,id:1},
    {name:'vueJs',price:60,count:1,select:true,id:2},
    {name:'angularJs',price:45,count:1,select:true,id:3},
    {name:'reactJs',price:50,count:1,select:false,id:4},
];
http.createServer(function (req,res) {
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        res.setHeader('content-type','text/html;charset=utf8')
        fs.createReadStream('./1.html').pipe(res);
    }else if(pathname.indexOf('/books')>-1){
        //后台需要通过是否传递id和 方法进行判断
        //首先看是否传递id
        // /books/1
        var reg = /\/books\/(\d+)/g;
        //匹配当前路径
        var arr = reg.exec(pathname);
        switch (req.method){
            case 'GET' :
                //如果id没有传值 默认获取所有
                if(!arr){
                    res.end(JSON.stringify(books));
                }else{
                    //通过id查询
                }
                break;
            case 'DELETE':
                if(arr){
                    //获取要删除的id号
                    var id = arr[1];
                    books = books.filter(function (item) {
                        return item.id != id;
                    });
                    //删除方法默认返回当前删除项 应该是对象形式
                    res.end(JSON.stringify({success:'成功'}));
                }
            case 'UPDATE':
            case 'POST':
        }

        res.end(JSON.stringify(books));
    }else{
        if(fs.existsSync('.'+pathname)){
            res.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');
            fs.createReadStream('.'+pathname).pipe(res);
        }else{
            res.statusCode=404;
            res.end('');
        }
    }
}).listen(3000);


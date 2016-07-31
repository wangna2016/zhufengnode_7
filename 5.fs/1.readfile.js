//引入我们的核心模块fs
var fs = require('fs');
//同步读取的方法
//读取到缓存中，默认编码格式null(buffer)
//同步的方法用trycatch进行捕获异常
/*try{
    var content = fs.readFileSync('./2.txt',{encoding:'utf8',flag:'r'});
    console.log(content);
}catch(e) {
    console.log(e.message);
}*/








//异步方法 只设置编码格式
fs.readFile('./1.txt','utf8', function (err,data) {
    //err 错误对象
    //data是我们读取到的数据
    if(!err)
    console.log(data);
})
//在node中能用异步不用同步


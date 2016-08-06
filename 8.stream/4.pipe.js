//先读 在写
var fs = require('fs');
function pipe(source,target) {
    //先创建可读流和可写流
    var rs = fs.createReadStream(source,{highWaterMark:4}); //64k
    var ws = fs.createWriteStream(target,{highWaterMark:1});//16k
    //流动模式
    rs.on('data',function (data) {
        var flag = true;
        flag = ws.write(data);
        if(!flag){
            //嘴里已经放不下了，先别喂了
            rs.pause();
        }
    });
    ws.on('drain',function () {
        console.log('干了');
        rs.resume();
    });
    //最后写完以后关闭掉文件
    //当文件读完后调用end方法
    rs.on('end',function () {
        ws.end('完成');//如果一旦调用end方法会将地下的和嘴里强制塞进去
    })
};
//一共10个字符 第一次读4个发现读满了，暂停 开始吃，吃完后触发一次抽干
//6个字符 在读4个 暂停 开始吃，吃完后触发一次抽干
//2个 吃 吃完后触发抽干
pipe('./1.txt','./2.txt');
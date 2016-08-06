var fs = require('fs');
//flags打开文件要做什么
//encoding 默认为null 默认为buffer
//start end  包前既包后
//highWaterMark 最高水位线 默认一次读64k,一次读多少b
//请求也是流
//相当于把水龙头打开，让水留进来，从非流动模式转换到流动模式

    //流的方法是异步的不能通过trycatch
var rs = fs.createReadStream('./1.txt',{flags:'r',highWaterMark:5});
//设置读取的编码格式
//如果设置编码highwatermark一定要大于最小编码的字符长度
//rs.setEncoding('utf8');
var result = '';
rs.on('data',function (data) {
    result += data;
    //暂停读取
    rs.pause();
    console.log(data);
});
setTimeout(function () {
    rs.resume();
},2000);
rs.on('end',function () {
    console.log(result);
});




/*
rs.on('error',function (err) {
});
*/




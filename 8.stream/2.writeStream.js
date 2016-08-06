var fs = require('fs');
var ws = fs.createWriteStream('./2.txt',{flags:'w',start:10});

ws.write('你好');
ws.end('不好'); //会强迫把所有内容都写到文件内

//flags 打开文件操作的方式
//encoding 默认编码utf8
//start 从什么位置开始写
//highWaterMark  默认16k
//response   response.write  response.end
//引入我们的核心模块fs
var fs = require('fs');
//写入的同步方法
//不存在会自动创建
//数据可以是buffer类型或者字符串类型，写入时默认格式就是utf8
//fs.writeFileSync('./2.txt',1,{flag:'a'}); 等同于appendfile
//fs.appendFileSync('./2.txt',1);
/*
fs.writeFile('./2.txt','hello', function () {
    console.log(arguments);
})*/

//需要谁就把谁引入进来
//自己写的js文件叫文件模块，必须同./的形式引入进来
//异步的有回调函数 同步的通过返回值获取
//require是个同步方法
//默认拿到的是{}
var e = require('./person.js');
console.log(e);

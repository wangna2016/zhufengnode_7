//定义buffer有三种方式（都是给buffer固定大小）
//1.直接指定大小创建,通过长度创建buffer
//Buffer是global上的属性
var buffer = new global.Buffer(3);
buffer.fill(0); //手动把内存清理干净
console.log(buffer);
//buffer是16进制的
/*
var ary = new Array(3);
console.log(ary);*/
//2.通过数组的方式进行创建
var buffer = new Buffer([16,17,18]);//16进制
console.log(buffer);
//如果设置的区间不再0-255之间
var buffer = new Buffer([256,257,258]);
//如果超过给定的值对256取模
console.log(buffer);
var buffer = new Buffer([-1,-2,-3]);
//如果负数加上256
console.log(buffer);
//如果不识别都是0
var buffer = new Buffer(['a','b','c']);
console.log(buffer);
//规定就是0-255之间的

//3.在utf8一个汉字由三个字符组成，node不支持gbk
var buffer = new Buffer("珠峰","ASCII");
//第二个参数可以指定编码 一个汉字在ascii码中代表一个字符
console.log(buffer);


//1.长度创建
//2.数组创建
//3.字符串创建


//1） write方法

var buffer = new Buffer(6);
//string,要写入的字符串
//offset,写入buffer的偏移长度
//length,写入的长度
//encoding,编码格式
//想把珠峰写入到buffer内
//第一次写珠 第二次写峰
buffer.write('珠',0,3,'utf8');
buffer.write('峰',3,3,'utf8');
console.log(buffer.toString());
var buffer = new Buffer(9);
//欢迎 您    自动的会将内容从头写到尾
buffer.write('欢迎',0);
buffer.write('您',6);
console.log(buffer.toString('utf8',2,5));//指定start和end截取汉字
//包前不包后 ary.slice(0,3) node中就一个方法包前又包后（后面会遇到）

// buffer中的slice，是有区别的
var arr1 = [100,2,3];
var arr = [arr1];
var arr2 = arr.slice(0);
console.log(arr2);
arr1[0] = 100;
console.log(arr2);



var arr = [1,2,3];
var newArr = arr.slice(0);
newArr[0] = 10;
console.log(arr);
//和数组的区别
var buffer = new Buffer([1,2,3]);
var newBuffer = buffer.slice(0);
newBuffer[0] = 100;//他会改变原有的buffer而不是新创建一个
console.log(buffer);   //16*6+4
//64，2，3

var buffer = new Buffer('珠峰');
console.log(buffer.slice(0,5).toString()); //5
console.log(buffer.slice(5).toString()); //1

//有内置模块可以解决乱码问题
//会将不能组成汉字的保留在自己的内存里，当遇到能拼接的拼接上输出正确的汉字

var StringDecoder = require('string_decoder').StringDecoder;
var sd = new StringDecoder;
console.log(sd.write(buffer.slice(0,5)));
console.log(sd.write(buffer.slice(5)));


var buffer1 = new Buffer('珠峰');
var buffer2 = new Buffer('培训');
//将buffer1和buffer2拷贝到bigBuffer中
var bigBuffer = new Buffer(12);
// targetBuffer, 目标buffer
// targetStart, 目标开开始
// sourceStart, 源buffer开始 可省略
// sourceEnd  源buffer结束 可省略
/*buffer1.copy(bigBuffer,0);
buffer2.copy(bigBuffer,0);
console.log(bigBuffer.toString());*/
//如果你给的长度过大会乱码
var newBuffer = Buffer.concat([buffer1,buffer2]);
console.log(newBuffer.toString());
//console.log(Buffer.concat([buffer1,buffer2],3).toString());
//自己实现一个myconcat方法
Buffer.myconcat = function (list,len) {
    return bigBuffer;
    //思路  把每一个buffer拿出来拷贝到bigBuffer上
    //要判断传入的长度 如果过长则不要，过短就是当前指定的大小，否则默认全部拷贝
};
Buffer.myconcat([buffer1,buffer2,buffer3],120);



/*
11    1*2^1+1*2^0
ff    15*16*1+15*16^0
*/


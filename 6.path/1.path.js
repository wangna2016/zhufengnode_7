var path = require('path');
//核心模块 专门处理路径问题

var src = 'a/b/c';
var build = 'c/../e';
path.join(src,build);// 拼接一个路径出来
console.log(path.join(src,build)); //..表示回到上一级目录

var str = 'hello.js';
var build = 'a.jpg';
//取hello.js的文件名 a.jpg的扩展名
console.log(path.basename(str,'.js')); //需要指定以什么为扩展名,会把不是扩展名的全部取出来
console.log(path.extname('a.jpg')); //取出扩展名
var newSrc = path.basename(str,'.js')+path.extname('a.jpg');
console.log(newSrc);

console.log(path.sep);//路径分隔符 window是\ mac是/
console.log(path.delimiter);//环境变量分隔符windows下为; mac下为:

console.log(path.normalize('b//////a/../1.txt/'));
//1. 会把/斜杠转换成\
//2。 而且识别. 和..
//3. 将多个/转换成单个
//4. 保留最后一个/

console.log(path.resolve('a/'));
//c:\Users\10354_000\Desktop\node\6.path 以当前目录解析出一个绝对地址
//2. 可以解析上一级
//3， 如果直接写/回到跟目录
//4. 如果写一个普通字符串会拼接一个路径
//5. 不会保留最后的/
//require.resolve();//解析一个绝对路径

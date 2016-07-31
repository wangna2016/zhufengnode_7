var Person = require('./ex1.js');
var p = new Person();
p.eat = 100;
console.log(p.eat);
//直接p.eat有查找的过程么？ 没有的话直接添加eat属性
//p.home[0]会有一个查找的过程，如果找到，先修改
p.home[0] = 200;//[ 200, 2, 3 ]
console.log(p.home);
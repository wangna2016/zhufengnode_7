/*
* 1.模块的分类
*   1.内置模块（核心模块）
*   2.文件模块 用./形式引入的都是第文件模块
*   3.第三方模块
* */

//util nodejs中和工具核心模块
//1. 先导入核心模块（不需要加./）
var util = require('util');
function Parent(){
    this.smile = "哈哈"
};
Parent.prototype.eat = function () {
    console.log('eat');
};
function Child(){
    this.cry = "哇哇哇"
    //Parent.call(this); 也会继承私有的
}
//Child.prototype.__proto__ = Parent.prototype;//只继承公有的
//Child.prototype = new Parent;
//原型继承
/*
Child.prototype = Object.create(Parent.prototype);

var c = new Child(); //会继承私有的方法
console.log(c.cry);
*/

/*util.inherits(Child,Parent);
var c = new Child();
console.log(c.smile);*/


//util.inspect方法
var obj = {name:'zfpx',value:'nodejs'};
//1.param1 需要解析的参数
//2.opts {showHidden, depth, colors}
Object.defineProperty(obj,'age',{
    enumerable:false,//可枚举
    value:100,
    configurable:false,//如果为不可配置，不可以进行删除
    writable:false//如果不可写值呢不能进行更改
});
obj.age =200;
//delete obj.age;
//对象的属性分为可枚举 不可枚举

util.inspect(); //是console.dir的实现
console.log(util.inspect(obj,{showHidden:true}));
console.log(util);
//判断type的方法
console.log(util.isArray([1,2,3]));
console.log(util.isDate(new Date()));
console.log(util.isError([]));

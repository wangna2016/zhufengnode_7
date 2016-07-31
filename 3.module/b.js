require('./a.js');//定义在全局下的属性可以在 任何模块下使用
console.log(global.a);

//CMD seajs(依赖就近) AMD requirejs(依赖前置) COMMONJS


//如何实现独立作用域 闭包 ，在文件外面增加一个闭包函数

/*(function(__dirname,__filename){
    b.js
})();//每个模块互不干扰*/

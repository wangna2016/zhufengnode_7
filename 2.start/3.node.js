//console.log(global); //{}
//console.log(exports==this); 因为当前当前代码实在文件下执行的   module.exports


//console.log(this==global);


var a  = 100;
//var出来的东西默认不会挂载在global上
console.log(global.a);
console.log(global);
//输出日志
console.log('log');
//输出警告
console.warn('warn');
//输出错误
console.error('error');
//输出信息
console.info('info');

console.time('start'); //用来记时间

for(var i = 0; i<100000;i++){
    //console.log(i);
}
console.timeEnd('start');
console.time('end');
//可以记时异步的
setTimeout(function () {
    console.log(1);
    console.timeEnd('end');
},2000);


//c:\Users\10354_000\Desktop\node\2.start 当前文件所在的文件夹下,这个属性不是global上的属性，而是通过函数传递进来的
console.log('__dirname',__dirname);
//当前文件夹的名字
console.log('__filename',__filename);
//一旦这个文件被创建，在运行时就无法改变
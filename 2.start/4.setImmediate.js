//在同步代码执行后调用的
setImmediate(function () {
    console.log('setImmediate',500);
    setImmediate(function () {
        console.log('setImmediate1',500);
    });
});
setTimeout(function () {
    console.log('setTimeout',100);
});
//setImmediate是给setTimeout一些机会的,
/*
for(var i = 0; i<100;i++){
    console.log(1000);
}*/
//global上的对象 （进程对象）
//console.log(global.process);
//current wording directory
console.log(process.cwd());  //__dirname
//改变工作目录
process.chdir('../');
console.log(process.cwd());//改变了工作目录
console.log(__dirname); //出生的那天是改变不了
//常驻内存          堆内存               堆的使用量
//{ rss: 17403904, heapTotal: 7409232, heapUsed: 3924872 }
console.log(process.memoryUsage());
var arr = [];
/*
for(var i = 0;i<1;){
    arr.push({});
    console.log(process.memoryUsage());//检测内存泄漏
}
*/

//当前服务员小本的底部 ，当前任务列表的底部，同步代码走完先执行他
process.nextTick(function () {
    console.log(1);
});
setImmediate(function () {
    console.log(100);
});
setTimeout(function () {
    console.log(1);
},0);
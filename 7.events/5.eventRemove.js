var EventEmmiter = require('events');
var e = new EventEmmiter();
function x1() {
    console.log(1);
}
//我们每一个函数都有最大监听数，默认10个
e.setMaxListeners(2);//warning 警告
e.once('休息1',x1);
//指定监听数量 x1的个数
console.log(e.listenerCount('休息1'));
//就近移除
// e.removeListener('休息',x1);
//清除所有的，此方法可以移除掉所有监听或者指定名字移除
// e.removeAllListeners('休息');
// e.emit('休息1');
console.log(e.listeners('休息1')); //获取当前函数池



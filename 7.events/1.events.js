//核心模块 events
var EventEmitter = require('events');
//绑定事件on   发射事件emit  移除事件removeListener
var util = require('util');//工具类
function Girl() {}
util.inherits(Girl, EventEmitter);
var girl = new Girl();
//事件的绑定
/*girl.on('我很帅',function () {
    console.log('我很帅');
});
girl.addListener('我很帅',function () {
    console.log('我很帅1');
});*/
//触发事件 发射事件emit
/*girl.emit('我很帅');
girl.emit('我很帅');*/
//相当于一个函数名称 对应一个函数列表，之后让列表的函数依次执行
//绑定一次
function veryHandsom(who) {
    console.log(who+"很帅");
}
girl.once('我很帅',veryHandsom);
girl.removeListener('我很帅',veryHandsom);
girl.emit('我很帅','xxxx');
girl.emit('我很帅','xxxx');
//once绑定的事件，当执行一次过后，就移除掉事件
// 事件的移除 (在发射之前移除掉)
//once  on emit  removeListener


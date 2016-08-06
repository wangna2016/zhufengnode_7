//核心模块 events
var EventEmitter = require('events');
//绑定事件on   发射事件emit  移除事件removeListener
var util = require('util');//工具类
function Girl() {}
util.inherits(Girl, EventEmitter);
var girl = new Girl();

function veryHandsom(who) {
    console.log(who+"很帅");
}
girl.once('我很帅',veryHandsom);
girl.emit('我很帅','xxxx');
girl.emit('我很帅','xxxx');


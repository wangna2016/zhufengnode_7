var EventEmitter = require('events');
var e = new EventEmitter;
function a() {
    console.log('a');
}
e.on('我很帅',a);
e.on('我很帅',a);
e.emit('我很帅');
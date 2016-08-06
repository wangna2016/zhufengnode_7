//EventEmitter是一个构造函数 
function EventEmitter() {
    this._events = {};
    this.smile='smile'
}
//绑定事件
EventEmitter.prototype.on = function (eventName,callback) {
    /*{
        我很帅:['function1','function2','function3'],
        我很丑:['function1','function2'],
    }*/
    //先判断当前对象中有没有，如果有push到数组内，没有创建一个数组
    if(this._events[eventName]){
        //能获取到
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};
EventEmitter.prototype.emit = function (eventName) {
     //在这里我们要拿到发射事件的时的参数（除了第一个参数都是我们需要的传递参数）
    var args = Array.prototype.slice.call(arguments,1);
     if(this._events[eventName]){
         //箭头函数里没有this执行的问题，从而解决了this指向问题
         this._events[eventName].forEach((item)=>{
             //取出队列里每一个函数，让其执行
             item.apply(this,args);
         });
     }
}




var e = new EventEmitter();
//on的参数有事件名称，还有事件(在一个队列里)
function veryHandsom(who,who1) {
    console.log(who,'我很帅1',who1,this.smile);
}

e.on('我很帅',veryHandsom);
e.emit('我很帅','xxx','ooo')
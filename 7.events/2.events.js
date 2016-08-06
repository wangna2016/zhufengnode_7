//EventEmitter是一个构造函数 
function EventEmitter() {
    this._events = {};
    this.smile='smile'
}
//绑定事件
EventEmitter.prototype.on = function (eventName,callback) {
    /*{
        我很帅:[function1,function2,one],
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

EventEmitter.prototype.removeListener = function(eventName,callback){
    //移除绑定 filter过滤
    if(this._events[eventName]){
        //callback = function1
        this._events[eventName] = this._events[eventName].filter(function(item){
            //item代表每一个函数
            return item != callback;//留下不一样的
        });
    }
};
//绑定一次
EventEmitter.prototype.once = function (eventName,callback) {
    //先绑定，在执行的时候移除事件并让里面的事件执行
    function one() {//真正触发时会触发one方法
        this.removeListener(eventName,one);
        callback.apply(this,arguments); //要让我们传进来的函数执行。并且移除掉绑定的函数
    }
    //先进行绑定
    this.on(eventName,one); //当emit时候会让one执行，还会传入参数
};

var e = new EventEmitter();
//on的参数有事件名称，还有事件(在一个队列里)
function veryHandsom(who,who1) {
    console.log(who,'我很帅1',who1,this.smile);
}

e.on('我很帅',veryHandsom);
e.removeListener('我很帅',veryHandsom);
e.emit('我很帅','xxx','ooo');
e.emit('我很帅','xxx','ooo');
e.emit('我很帅','xxx','ooo');

//写一个once方法 先执行  在移除
Buffer.myconcat = function (list, len) {
    if (typeof len == undefined){
        len = 0;//如果没有传入手动维护长度，算出总共的长度
        for (var i=0; i<list.length; i++){
            var curBuffer = list[i];
            len += curBuffer.length;
        }
    }
    //构建一个大buffer,有可能长度很大
    var bigBuffer = new Buffer(len);
    var start = 0;//拷贝的索引
    for (var i=0; i<list.length; i++){
        //拿出每一个buffer像整个的buffer内考入
        var curBuffer = list[i];
        curBuffer.copy(bigBuffer, start);
        start+=curBuffer.length; //每次拷贝进去更换索引
    }
    //返回大buffer
    return bigBuffer.slice(0,start);
};
var buffer1 = new Buffer('陈超');
var buffer2 = new Buffer('真帅');
var buffer4 = Buffer.myconcat([buffer1], 4);
console.log('buffer4:'+buffer4);
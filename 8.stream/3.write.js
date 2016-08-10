var fs = require('fs');

var ws = fs.createWriteStream('./2.txt',{highWaterMark:5});
var index = 0;
function write() {
    var flag = true; //默认可以往里写
    while(flag&&index<10){
        //write/end方法要传入buffer或者字符串
        flag = ws.write(''+index++); //往嘴里放饭，如果一旦返回false说明嘴已经满了
        console.log(flag);
    }
}
write();
//抽干，就是把饭都咽下去以后再喂我
//当缓存区内容消化后调用drain方法
ws.on('drain',function () {
    console.log('嘴满了');
    write();
});
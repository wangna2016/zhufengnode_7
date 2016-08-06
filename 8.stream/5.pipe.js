//pipe方法。我们刚才目的是为了节约内存，来达到，写和读都在一个可接受范围内， node实现了一个pipe方法，专门用来实现这样的形式
var fs = require('fs');

//用法从可读流 导入到可写流中
function copy(source,target) {
    //创建两个流
    var rs = fs.createReadStream(source)
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);
}
copy('./1.txt','./10.txt');
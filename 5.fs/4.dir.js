var fs = require('fs');
//没有父亲不能创建儿子
//fs.mkdirSync('a/b');
//创建多级目录 作业:异步创建文件夹(递归)
/*function mkdir(path){
    //分割路径
    var p = path.split('/');
    //[a,b,c,e]
    //循环创建目录
    for(var i = 0; i< p.length;i++){
        var curPath = p.slice(0,i+1).join('/'); //a ab abc abce
        //返回boolean类型，表示当前路径是否存在
        var flag = fs.existsSync(curPath);
        if(!flag)//如果不存在我们创建目录
        fs.mkdirSync(curPath);
    }
}
mkdir('a/b/c/e');*/
//判断文件是否存在如果文件不存在创建，存在则不创建
//fs.exists 同步/异步

//homework  fs.exists fs.mkdir

//异步就是回调函数 同步就是返回值
//只能读取儿子辈的内容
var result = fs.readdirSync('./a'); //读取a文件夹
console.log(result);
//遍历数组
for(var i = 0; i<result.length;i++){
    var cur = result[i];
    console.log(cur); ///判断是文件还是文件夹
    //判断当前文件的状态,会返回当前状态
    var s = fs.statSync('./a/'+cur);//.a/1
    //如果是文件夹
    if(s.isDirectory()){
        //删除文件夹
        fs.rmdirSync('./a/'+cur);
    }
    //如果是文件
    if(s.isFile()){
        //删除文件
        fs.unlinkSync('./a/'+cur);
    }
}
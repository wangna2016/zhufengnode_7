function read(callback){
    setTimeout(function () {
        console.log("读取完了");
        callback();
    },2000)
}
function write(){
    console.log('开始写');
};
read(write);
//当什么时候读取完毕在执行写的方法
setTimeout(function () {
    console.log(1);
})
for(var i = 100;i>10;i--){
    console.log(i);
}

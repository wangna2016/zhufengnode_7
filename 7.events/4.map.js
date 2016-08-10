//map方法
//映射方法
var arr = [1,2,3].map(function (item) {
    return {key:item};
});
console.log(arr);
//过滤
var arr = [1,2,3].filter(function (item) {
    return item!=2;
});
console.log(arr);
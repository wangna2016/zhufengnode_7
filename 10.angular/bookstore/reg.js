var reg = /\/books\/(\d+)/g;
//匹配当前路径
var pathname = '/books/1';
var arr = reg.exec(pathname);
console.log(arr[1]);
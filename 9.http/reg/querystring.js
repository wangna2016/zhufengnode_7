//querystring 为node中帮我们解析字符串转换成对象
//username=234&password=432
var querystring = require('querystring');
console.log(querystring.parse('username==234&&password==432','&&','=='));

console.log(querystring.stringify({ username: '234', password: '432' },'&&','=='));
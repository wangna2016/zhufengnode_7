//base64 在二进制中最大的值不超过64
//把对应的0-63之间的数转换成可见编码
//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//abcdefghijklmnopqrstuvwxyz
// 0123456789
// +/

//进制间的转换
//转换成10进制 后面参数为当前数，和当前进制
console.log(parseInt(64,16)); //16*6+4 = 100
console.log(parseInt(77,8)); //当前77是8进制 => 63

//toString 10转换成任意进制
//把3转换成2进制
console.log((012).toString(10)); //1

var buffer = new Buffer('珠');//转换成base64

// 0-63       00111111
//console.log(parseInt("00111111",2));//在base64中最大值为00111111
//base64的原理
//一个字节由8位组成  一个汉字共24个位 3*8 变成 4*6 每个前面补00
console.log(buffer);// e7 8f a0 当前珠字代表的16进制
//将16进制转换成2进制
console.log((0xe7).toString(2));//11100111
console.log((0x8f).toString(2));//10001111
console.log((0xa0).toString(2));//10100000

//00111001 00111000 00111110 00100000 最大不可能超过63
//00111111 = 63
//再将其转换成10进制取值
console.log(parseInt("00111001",2));
console.log(parseInt("00111000",2));
console.log(parseInt("00111110",2));
console.log(parseInt("00100000",2));

//57 56 62 32 四个字符代表的10进制
var str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
str+= "abcdefghijklmnopqrstuvwxyz";
str+="0123456789";
str+="+/";

console.log(str[57]+str[56]+str[62]+str[32]);
//result
//1. 把16进制转换成2进制 toString
//2. 把2进制数连起来 每隔6位来一刀 前面补00
//3. 转换成10进制 parseInt
//4. 用对应的值去字符串中取

//webpack 默认小于8k的图片都是转换成base64
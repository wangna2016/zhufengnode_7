require('./2.cache.js');
delete require.cache[require.resolve('./2.cache.js')];
require('./2.cache.js');
//加载同一个模块需要多次引用么。我们node有自带的缓存机制
//require.cache 专门存放缓存
//console.log(require.cache);
//如果想实现多次加载，清空缓存，通过模块的路径请除缓存
//require.resolve()解析一个绝对路径
/*console.log(require.resolve('./2.cache.js'));
var a = {模块地址:缓存的模块}
delete a.模块地址//通过键删值*/

//通过右键点开命令行窗口
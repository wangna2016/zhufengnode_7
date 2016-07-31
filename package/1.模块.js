/*
require('mime');//第三方模块也可以不用加./

//查找规则 通过module.paths
console.log(module.paths);
//搜索当前文件夹里的node_modules - 找对应的包名 - 找里面的index.js/index.json如果没有查找package.json 里面的main*/
require('myjiangwen');

//文件模块 require的时候不需要增加.js /.json的后缀名


require('./a'); //a.js a.json先查找js 在查找json

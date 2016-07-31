//require  module.exports  exports
console.log(this == exports);
/*
(function (require,module,exports,__dirname,__filename) {
    //让exports对象等于module.exports
    exports = module.exports = {};
    module.exports = 100;
    return module.exports;

    //使用exports 可以导出普通类型的
    //module.exports 导出引用数据类型

})()*/

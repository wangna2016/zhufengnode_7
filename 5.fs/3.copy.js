var fs = require('fs');

function copy(source,target){
    /*var content = fs.readFileSync(source);
    fs.writeFileSync(target,content);
    //异步方法*/
    fs.readFile(source, function (err, data) {
        if (!err){
            fs.writeFile(target, data, function () {
                console.log(arguments);
            })
        }
    })
}
copy('./1.txt','./3.txt');

//通过ajax像服务器端发送请求，服务器端返回最新的时间
//1.创建xhr对象
var clo = document.querySelector('#clock');
function clock() {
    var xhr = new XMLHttpRequest();
//2. 打开
    xhr.open('get','/clock',true);
    xhr.responseType='json';
//3. 监听数据
    xhr.onload = function () {
            clo.innerHTML = xhr.response.time;
            //如果我们规定响应类型为json格式,我们必须要使用xhr.response 如果没有规定，都可以
    };
    xhr.send();
}
setInterval(clock,1000);
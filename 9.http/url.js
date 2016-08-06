var url = require('url');

var urlObj = url.parse('https://jw:123@www.baidu.com:8080/s?ie=utf8&tn=98012088_6_dg&ch=2&wd=pt#top',true);
console.log(urlObj);

/*

Url {
    protocol: 'https:', 协议
        slashes: true, 是否有/
        auth: 'jw:123', //账户信息
        host: 'www.baidu.com',
        port: null,
        hostname: 'www.baidu.com',
        hash: null,
        search: '?ie=utf8&tn=98012088_6_dg&ch=2&wd=pt',
        query: 'ie=utf8&tn=98012088_6_dg&ch=2&wd=pt',
        pathname: '/s',
        path: '/s?ie=utf8&tn=98012088_6_dg&ch=2&wd=pt',
        href: 'https://www.baidu.com/s?ie=utf8&tn=98012088_6_dg&ch=2&wd=pt' }
*/

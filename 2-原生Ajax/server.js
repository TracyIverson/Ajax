//1.引入Express
const express = require('express');

//2.创建对象
const app = express();

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应
    response.send("get");
})

//post请求
app.post('/server', (request, response) => {
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应
    response.send("post");
})

//获取JSON数据
app.all('/json', (request, response) => {
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //新建一个student对象
    let student = {
        name: "Jack",
        age: 18,
    }
    //序列化对象
    let jsonStr = JSON.stringify(student);
    //设置响应
    response.send(jsonStr);
})

//IE缓存
app.all('/IE', (request, response) => {
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //设置响应
    response.send("IE-1");
})

//超时与网络异常
app.all('/delay', (request, response) => {
    //设置响应头允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    //3秒后延迟执行
    setTimeout(() => {
        response.send("延迟响应");
    }, 3000);
})

//j针对 jQuery 服务
app.all('/jquery-server', (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    //接收所有请求头参数
    response.setHeader('Access-Control-Allow-Headers', '*');
    let student = {
        name: "Jack",
        age: 18,
    }
    let jsonStr = JSON.stringify(student);
    response.send(jsonStr);
})

//针对 axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'Nliverd的AJAX学习笔记' };

    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));

});

//针对 fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = { name: 'Nliverd的AJAX学习笔记' };
    // response.send("Hello jQuery AJAX");
    response.send(JSON.stringify(data));
});

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000 端口监听中....")
})
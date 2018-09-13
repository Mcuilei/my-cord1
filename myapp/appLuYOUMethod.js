var express = require("express");
var app = express();
//app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，
// 它的作用是对于一个路径上的所有请求加载中间件。 任何请求一下语句都会实行
app.all("/static",(req,res,next)=>{
    console.log('Accessing the secret section ...');
    next();
});
//路由路径
//路由路径和请求方法一起定义了请求的端点，它可以是字符串、字符串模式或者正则表达式。

//字符串路径     匹配根路径请求
app.get("./",function(req,res){
    res.send("root")
});

//使用字符串模式的路由路径示例：
app.get("./ac+b*d?name",(req,res)=>{
    res.send("ac+b*d?name")
});

//使用正则表达式的路由路径示例：
app.get("/a/",(req,res)=>{
    res.send("/a/")
});

//响应方法
//下表中响应对象（res）的方法向客户端返回响应，终结请求响应的循环。
// 如果在路由句柄中一个方法也不调用，来自客户端的请求会一直挂起

//res.download()	提示下载文件。
//res.end()	终结响应处理流程。
//res.json()	发送一个 JSON 格式的响应。
//res.jsonp()	发送一个支持 JSONP 的 JSON 格式的响应。
//res.redirect()	重定向请求。
//res.render()	渲染视图模板。
//res.send()	发送各种类型的响应。
//res.sendFile	以八位字节流的形式发送文件。
//res.sendStatus()	设置响应状态代码，并将其以字符串形式作为响应体的一部分发送

//app.route()
app.route("/book").get(function(req,res){
    res.send("Get a random book")
}).post((req,res)=>{
    res.send('Add a book');
});
app.listen(3000);

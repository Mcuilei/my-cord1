var express= require("express");
var app= express();
//Express 应用可使用如下几种中间件：

//应用级中间件
//路由级中间件
//错误处理中间件
//内置中间件
//第三方中间件


//应用级中间件

// 没有挂载路径的中间件，应用的每个请求都会执行该中间件
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

// 挂载至 /user/:id 的中间件，任何指向 /user/:id 的请求都会执行它
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

// 路由和句柄函数(中间件系统)，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
    res.send('USER');
});

//下面这个例子展示了在一个挂载点装载一组中间件。
// 一个中间件栈，对任何指向 /user/:id 的 HTTP 请求打印出相关信息
app.use('/user/:id', function(req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next();
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});

//作为中间件系统的路由句柄，使得为路径定义多个路由成为可能。
// 在下面的例子中，为指向 /user/:id 的 GET 请求定义了两个路由。
// 第二个路由虽然不会带来任何问题，但却永远不会被调用，
// 因为第一个路由已经终止了请求-响应循环。

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
    console.log('ID:', req.params.id);
    next();
}, function (req, res, next) {
    res.send('User Info');
});

// 处理 /user/:id， 打印出用户 id
app.get('/user/:id', function (req, res, next) {
    res.end(req.params.id);
});

//如果需要在中间件栈中跳过剩余中间件，调用 next('route') 方法将控制权交给下一个路由。
// 注意： next('route') 只对使用 app.VERB() 或 router.VERB() 加载的中间件有效。

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res, next) {
    // 如果 user id 为 0, 跳到下一个路由
    if (req.params.id == 0) next('route');
    // 否则将控制权交给栈中下一个中间件
    else next(); //
}, function (req, res, next) {
    // 渲染常规页面
    res.render('regular');
});

// 处理 /user/:id， 渲染一个特殊页面
app.get('/user/:id', function (req, res, next) {
    res.render('special');
});

//错误处理中间件
//错误处理中间件有 4 个参数，定义错误处理中间件时必须使用这 4 个参数。
// 即使不需要 next 对象，也必须在签名中声明它，否则中间件会被识别为一个常规中间件，
// 不能处理错误

//错误处理中间件和其他中间件定义类似，只是要使用 4 个参数，而不是 3 个，其签名如下：
// (err, req, res, next)。
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//第三方中间件

var cookieParser = require('cookie-parser');

// 加载用于解析 cookie 的中间件
console.log(cookieParser());
app.use(cookieParser());
app.listen(3000);
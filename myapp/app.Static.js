var express = require('express');
var app = express();
app.use(express.static("./public"));
// 例如：http://localhost:3000/images/1.gif

//如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：
app.use(express.static('files'));
//访问静态资源文件时，express.static 中间件会根据目录添加的顺序查找所需的文件。


//如果你希望所有通过 express.static 访问的文件都存放在一个“虚拟（virtual）”目录
// （即目录根本不存在）下面，可以通过为静态资源目录指定一个挂载路径的方式来实现，如下所示
app.use('/static', express.static('public'));
// 例如 ：http://localhost:3000/static/images/1.gif
app.listen(3000);

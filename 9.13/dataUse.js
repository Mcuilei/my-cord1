var express = require("express");
var app = express();
//如果路径里面没有任何东西 ，那么默认路径为 “/” next 是一个执行函数
app.use((req,res,next)=>{
    console.log(new Date());
    next();
});
app.get("/admin",(req,res)=>{
    console.log(req.originalUrl);//斜杆后面的路径 例如：/admin?name=haha&id=666都会输出
    console.log(req.baseUrl);//不会输出
    console.log(req.path);//只输出斜杆后的 /admin
    res.end("data")
});

app.listen(3000);

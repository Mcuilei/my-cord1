/*
* express加载ejs
* */
var express = require("express");
var app = express();
//设置模板引擎  放置模板的文件夹必须为 views
app.set("view engine","ejs");
app.get("/",(req,res)=>{
//    如何设置数据
    res.render("view",{
        news:[
            { "title":"首页"},
            { "title":"关于"},
            { "title":"我们"}
        ]
    })
}).listen(3000);
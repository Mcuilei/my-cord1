/*
* 静态资源目录 static public
* */
var express = require("express");
var app = express();
//加载静态资源目录
app.use("",express.static("./public"));
app.listen(3000);
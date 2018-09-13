var express = require("express");
var app = express();
app.get("/haha",function(req,res){
    res.send("哈哈")
}).listen(3000);

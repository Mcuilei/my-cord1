var express = require("express");
var app = express();
app.get(/^\/student\/([\d]{4})$/,(req,res)=>{
    console.log(req.params);
    res.send("学生id"+req.params[0])
});
app.get("/teacher/:gonghao",(req,res)=>{
    console.log(req.params);
    res.send("老师工号"+req.params.gonghao)
});
app.listen(3000);
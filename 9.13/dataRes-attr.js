/*
* res 的属性 还有地址栏的规定
* */
var express = require("express");
var app = express();
app.get("/Ab",(req,res)=>{
    res.send("data")
});
app.get("/student/:id",(req,res)=>{
    var id = req.params.id;
    var reg = /^\d{5}$/.test(id);
    if(reg){
        res.send("学员id"+id)
    }else {
        res.send("格式不正确")
    }
});
app.get("/:username/:id",(req,res)=>{
    var user = req.params["username"];
    var id = req.params.id;
    res.write(user);
    // 如果用send 会出现 Error: Can't set headers after they are sent. 改为  end
    res.end(id)
});
app.listen(3000);

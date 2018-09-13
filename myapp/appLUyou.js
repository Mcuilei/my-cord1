var express = require("express");
var app = express();
// 对网站首页的访问返回 "Hello World!" 字样
app.get("/",(req,res)=>{
    res.send("Hello World!")
});
// 网站首页接受 POST 请求
app.post("/",(req,res)=>{
    res.send("GOT a post request")
});
// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});
// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});
app.listen(3000);

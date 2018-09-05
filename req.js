/**
 * Created by cui on 2018/9/5.
 */
var http = require("http");
var url = require("url");
http.createServer((req,res)=>{
    var query = url.parse(req.url,true).query;
     res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end("用户名："+query.username+"<br/>"+"密码："+query.password);
}).listen(8080,"127.0.0.1");


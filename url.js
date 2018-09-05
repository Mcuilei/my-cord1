/**
 * Created by cui on 2018/9/5.
 */
var http = require("http");
var url =require("url");
http.createServer((req,res)=>{
    var pathname = url.parse(req.url).pathname;
    //http:localhost:8080/haha?username=Tom&age=18
    //pathname/后面的东西 haha
    console.log(pathname);
    var query = url.parse(req.url,true).query;
    //query时如果第二参数传为true  装换为一个对象
    //query ？后面的东西 username=Tom&age=18
    console.log(query);
    res.end("123");
}).listen(8080,"127.0.0.1");

/**
 * Created by cui on 2018/9/11.
 */
/*
* 功能 ：根据 对应路由跳转页面
* 页面：首页 学生页  404 页面
*
* */

var http = require("http");
var show = require("./show.js");
http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == "/"){
        show.showIndex(req,res)
    }else if(req.url.substring(0,9) == "/student/"){
        show.showStudent(req,res)
    }else {
        show.show404(req,res)
    }

}).listen(3000,"127.0.0.1");
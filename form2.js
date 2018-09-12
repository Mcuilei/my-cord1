/*
 *获取路径
 * 获取到扩展名
 * 加上一个时间戳
 * fs  rename  修改名称
 * 完成上传文件
 *  */
var http = require("http");
var path = require("path");//取得路径
var fs = require("fs");
var sd = require("silly-datetime");//时间戳 时间插件
var formidable = require("formidable");//form表达处理插件
var until = require("until");//使用工具
http.createServer((req,res)=>{
    //前端发送的请求路径 如果是/dopost 并且请求方式是post的话
    if(req.url =="/dopost" && req.method.toLocaleUpperCase() == "POST"){
    //创建表单请求
    //    实例form请求函数
    var form = formidable.IncomingForm();
    //    创建图片保存路径
    form.uploadDir ="./upload";
    //    解析form请求数据 err错误
    form.parse(req,function(err,fields,files){
        // fields 文本域  输入框和radio的数据都在这里
        // fiels 文件域
        var extname = path.extname(files.pic.name);
        //扩展名
        var tt = sd.format(new Date,"YYYYMMDDHHmm");
        //时间戳
        var oldpath = __dirname+"/"+files.pic.path;
        //获取原始本地路径
        var newpath = __dirname+"/upload/"+tt+extname;
        //获取新路径
        //fs.rename 改名
        fs.rename(oldpath,newpath,function(err){
            if(err){
                throw err
            }else {
                res.writeHead(200,{"Content-type":"text/plain;charset=utf-8"});
               res.end("改名成功")
            }
        })
    });
    }
}).listen(3000,"127.0.0.1");


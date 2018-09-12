/**
 * Created by cui on 2018/9/11.
 */
var http =require("http");
var queryString =require("querystring");
http.createServer((req,res)=>{
    if(req.url == "/dopost" && req.method.toUpperCase() == "POST"){
        var allData = "";
        req.addListener("data",function(chunk){
            console.log(chunk);
            allData += chunk;
        });
        req.addListener("end",function(){
            var dataObj = allData.toString();
            var obj = queryString.parse(dataObj);
          var name = obj.username,
              pic = obj.pic,
              obj = obj.sex;
            res.end("success"+name +pic+obj);
        });
    }
}).listen(3000,"127.0.0.1");
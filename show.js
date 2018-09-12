/**
 * Created by cui on 2018/9/11.
 */
exports.showIndex = showIndex;
exports.showStudent = showStudent;
exports.show404 = show404;
function showIndex(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    res.end("首页")
}
function showStudent(req,res){
    var id = req.url.substr(9,3);
    console.log(req.url.substr(9));
    if(id!=req.url.substr(9)){
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        res.end("没有此学生")
    }else {
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        res.end("学生的id："+id)
    }
}
function show404(req,res){
    res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});
    res.end("404")
}
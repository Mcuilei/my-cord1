//加载mongodb模块
var mongodb = require("mongodb").MongoClient;
//链接数据库地址
var url = "mongodb://localhost:27017/";
mongodb.connect(url,function(err,db){
    var dbBase = db.db("test");
    //链接查询
    //    增加
    //dbBase.collection("col").insert({"name":"xiaoming"},function(){
    //    console.log("插入成功");
    //    db.close();
    //})
    //查找
    dbBase.collection("col").find().toArray(function(err,data){
        console.log("查找成功");
        console.log(data);
        db.close();
    });
    //删除
    //dbBase.collection("col").remove({"name":"haha"},function(){
    //    console.log("删除成功");
    //    db.close();
    //})
    // 修改
    //dbBase.collection("col").update({"name":"hehe"},{$set:{"name":"yy"},function(){
    //    console.log("更改成功");
    //    db.close();
    //}})
});

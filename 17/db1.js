var mongodb = require("mongodb").MongoClient;
var setting = require("./setting");
function connectDB(callback){
    var url = setting.url;
    mongodb.connect(url,function(err,db){
        var dbBase = db.db("test");
        if(err){
            callback(err,null)
        }
        callback(err,db)
    })

}

exports.add = function(collection,json,callback){
    connectDB(function(err,db){
        db.db("test").collection(collection).insert(json,function(err,data){
            console.log("插入成功");
            db.close();
        })
        //操作完进行查看
        //db.db("test").collection(collection).find().toArray(function(err,data){
        //    console.log("查找成功");
        //    console.log(data);
        //    db.close();
        //})
    })
};

exports.rem = function(collection,json,callback){
    connectDB(function(err,db){
        db.db("test").collection(collection).remove(json,function(err,data){
            console.log("移除成功");
            db.close();
        })
    })
};

exports.upd = function(collection,json,newjson,callback){
    connectDB(function(err,db){
        db.db("test").collection(collection).update(json,{$set:newjson},function(err,data){
            console.log("替换成功");
            db.close();
        })
    })
};

exports.fid = function(collection,callback){
    connectDB(function(err,db){
        db.db("test").collection(collection).find().toArray(function(err,data){
            console.log("查找成功");
            console.log(data);
            db.close();
        })
    })
};



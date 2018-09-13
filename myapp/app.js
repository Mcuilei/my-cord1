var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);  //::
    console.log(port);  //3000
    //Example app listening at http://:::3000
    console.log('Example app listening at http://%s:%s', host, port);
});

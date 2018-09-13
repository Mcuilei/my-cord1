var express = require('express');
var birds = require('./Router');
var app = express();
app.use('/', birds);
app.use('/about', birds);
app.use('/birds', birds);
app.listen(3000);

var express = require('express');
var io = require('socket.io');
var ejs = require('ejs');
var path = require('path');

//Express setup
var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var homeRouter = require('./routes/home');

app.use('/', homeRouter);

//EJS setup
app.set('view engine', 'ejs');

//Run it, Run it
app.listen(3001, function () {
    console.log("Running at port 3000")
});

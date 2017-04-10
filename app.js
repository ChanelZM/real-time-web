var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ejs = require('ejs');
var path = require('path');

//Express setup
app.use(express.static(path.join(__dirname, 'public')));

var homeRouter = require('./routes/home');

app.use('/', homeRouter);

//IO setup
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

//EJS setup
app.set('view engine', 'ejs');

//Run it, Run it
http.listen(process.env.PORT||3001, function () {
    console.log("Running at port 3000")
});

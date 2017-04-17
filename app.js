var express = require('express');
var Server = require('http').Server;
var socketio = require('socket.io');
var path = require('path');

var app = express();
var server = Server(app);
var io = socketio(server);

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
server.listen(process.env.PORT||3001, function () {//Use the port that's default on Heroku, else use 3001
    console.log("Running at port 3001")
});

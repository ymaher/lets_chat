var express = require('express');
var socket = require('socket.io');

//App setup
var app = express();

//Server setup
var server = app.listen(4000,function(){
  console.log('Listening to port 4000');
});

//Static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection',function(socket){
  console.log('socket connected');
});

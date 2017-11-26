var express = require('express');

//App setup
var app = express();

//Server setup
var server = app.listen(4000,function(){
  console.log('Listening to port 4000');
});

//Static files
app.use(express.static('public'));

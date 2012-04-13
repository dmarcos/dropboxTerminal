var express = require('express');
var everyauth = require('everyauth');
var app = express.createServer();

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.end('Hello World\n');
});

app.listen(4000);
var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

index = fs.readFileSync('/home/ubuntu/bitstarter/index.html');


app.get('/', function(request, response) {
  response.send(index.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

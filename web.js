var express = require('express');
var app = express();
app.use(express.logger());

index = fs.readFile('/home/ubuntu/bitstarter/index.html', function (err, data){
    if(err) throw err;
    console.log(data);
});

buffer = new Buffer(index);
 
var buffer = new Buffer(

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

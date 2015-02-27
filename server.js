//Modified helloworld example. 
//retreived from http://expressjs.com/starter/hello-world.html

var express = require('express'); 
var app = express();

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })

});

app.use('/js', express.static(__dirname + '/js'));
app.use('/css',express.static(__dirname + '/css'));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})



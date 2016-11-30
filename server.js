var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 3000;

app.get('/', function (req, res) {
  var { ip } = req.query;
  io.emit("IP", ip);
  res.send('done');
});
app.get('/done', (req, res) => {
  io.emit("done");
  res.send('done')
});

server.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

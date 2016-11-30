var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var ioClient = require('socket.io-client');
const spawn = require('child_process').spawn;
var io = require("socket.io-client")('http://localhost:3000');
let ping = null;
var port = 3001;

io.on("connect", function () {
    io.on('IP', function (data) {
        ping = spawn('ping', [data]);
        ping.stdout.on('data', (d) => {
            console.log(`stdout: ping ${data}`);
        });
    });
    io.on('done', function (data) {
        ping.kill();
    });
});
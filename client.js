const spawn = require('child_process').spawn;
var io = require("socket.io-client")('http://localhost:3000');
let ping = null;

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

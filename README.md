# Node Botnet

Main purpose of this repo is for educational purposes only and was a class assignment.

## usage

first install all node packages

``` npm install ```

If you want to test locally you don't have to change any files,
just run both the client and server from your own computer. To run
the server run ` node server.js ` and to run the client run 
` node client.js `. to start pinging, go to a web browser and navigate
to ` localhost:300?ip=someIpToPing ` which will start the client pinging. Then
to stop it form pinging navigate to ` localhost:3000/done`.


if you want to run the client from a remote host, you will have to change the server in the client 
to the address of your server.

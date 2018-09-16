// imports
var net = require('net');

//cmd line arguments
var args = process.argv.slice(2,);
var port = args[0];

var server = net.createServer( function (socket){
  var date = new Date();
  var month = Number(date.getMonth())+1;
  if (month<10) {
    month = "0" + month.toString();
  }
  var data = date.getFullYear() + "-" + month+ "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";

  socket.write(data);
  socket.end();
});
server.listen(port);


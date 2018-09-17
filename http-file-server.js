// Imports
var http = require('http');
var fs = require('fs');
// CMD line arguments
var args = process.argv.slice(2,);
var port = args[0];
var path = args[1];

var server = http.createServer( function (req, res) {
  var data = fs.createReadStream(path);
  data.pipe(res);
});

server.listen(port);


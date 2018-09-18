const http = require('http');
const url = require('url');

var port = process.argv[2]

function formatTime(time, format) {
  if (format == 'parsetime') {
    return {
      "hour" : time.getHours(),
      "minute" : time.getMinutes(),
      "second" : time.getSeconds(),
    }
  }
  if (format == 'unixtime') {
    return {'unixtime' : time.getTime()};
  }
}

function parseRequest(url) {
  var time = new Date(url.query.iso);
  if (url.pathname == '/api/parsetime') {
    return formatTime(time, 'parsetime')
  }
  if (url.pathname == '/api/unixtime'){
    return formatTime(time, 'unixtime')
  }
}

var server = http.createServer( function (req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type' : "application/json"});
    var requrl = url.parse(req.url, true);
    console.log(requrl);
    res.end(JSON.stringify(parseRequest(requrl)));
  }
  else {
    res.writeHead(405);
    res.end()
  }
});

server.listen(+port, function () {
  console.log('Server listening on http://localhost:%s', port)
});

var http = require('http');

args = process.argv.slice(2,);
URL = args[0];

var stream = "";

http.get(URL, function (response) {
  response.setEncoding('utf8');
  response.on("error", console.error);
  response.on("data", function (data){
    stream += data;
  });
  response.on("end", function (){
    console.log(stream.length);
    console.log(stream);
  });
}).on('error', console.error);
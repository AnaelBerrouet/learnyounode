var http = require('http');

args = process.argv.slice(2,);
URL = args[0];
// console.log(URL);

http.get(URL, function (response) {
  response.setEncoding('utf8');
  response.on("data", function (data){
    console.log(data);
  });
});
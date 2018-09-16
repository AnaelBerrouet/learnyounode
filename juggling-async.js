var http = require('http');

URLs = process.argv.slice(2,);

var stream_0 = "";
var stream_1 = "";
var stream_2 = "";
cb_count = 0;

function print (count) {
  if (count == 3) {
    console.log(stream_0);
    console.log(stream_1);
    console.log(stream_2);
  };
}

// get data from URL_0 (1/3) - can be improved by moving code duplication into function
http.get(URLs[0], function (response) {
  response.setEncoding('utf8');
  response.on("error", console.error);
  response.on("data", function (data){
    stream_0 += data;
  });
  response.on("end", function (){
    cb_count += 1;
    print(cb_count);
  });
}).on('error', console.error);

// get data from URL_0 (1/3)
http.get(URLs[1], function (response) {
  response.setEncoding('utf8');
  response.on("error", console.error);
  response.on("data", function (data){
    stream_1 += data;
  });
  response.on("end", function (){
    cb_count += 1;
    print(cb_count);
  });
}).on('error', console.error);

// get data from URL_0 (1/3)
http.get(URLs[2], function (response) {
  response.setEncoding('utf8');
  response.on("error", console.error);
  response.on("data", function (data){
    stream_2 += data;
  });
  response.on("end", function (){
    cb_count += 1;
    print(cb_count);
  });
}).on('error', console.error);


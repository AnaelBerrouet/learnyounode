// import module fs (file system)
var fs = require('fs');

//get file path as command line argument
var path = process.argv[2];

function getNum(callback) {
  fs.readFile(path, function doneReading(err, fileContents){
    var str = fileContents.toString().split("\n");
    var N = str.length - 1;
    callback(N);
  })
}

getNum(console.log);
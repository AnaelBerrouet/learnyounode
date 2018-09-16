// import module fs (file system)
var fs = require('fs');

//get file path as command line argument
var path = process.argv[2];
var buf = fs.readFileSync(path);
var str = buf.toString().split("\n");
var N = str.length - 1;

console.log(N);
//Get command line arguments
var args = process.argv.slice(2,);
var dirPath = args[0];
var ext = args[1];

//import modules
var filter = require('./modular1');

var print = function(err, array){
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
};

filter(dirPath, ext, print);
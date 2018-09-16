//Get command line arguments
// var args = process.argv.slice(2,);
// var dirPath = args[0];
// var ext = "."+args[1];

//import modules
var fs = require('fs');
var path = require('path');

module.exports = function getDirectory(directoryName, extension, callback){
  var list = [];
  fs.readdir(directoryName, function(err, dirList) {
    if (err) {
      return callback(err);
    }
    for (var i = 0; i < dirList.length; i++){
      if (path.extname(dirList[i]) == "."+extension){
        list.push(dirList[i]);
      }
    }
    callback(null, list);
  });
}

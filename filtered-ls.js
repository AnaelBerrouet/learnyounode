//Get command line arguments
var args = process.argv.slice(2,);
var dirPath = args[0];
var ext = "."+args[1];

// console.log("ext: " + ext);

//import modules
var fs = require('fs');
var path = require('path');

function getDirectory(callback){
  var list = "";
  fs.readdir(dirPath, function(err, dirList) {
    if (err) {
      return callback(err);
    }
    // console.log("dirList: " + dirList.length);
    for (var i = 0; i < dirList.length; i++){
      // console.log(path.extname(dirList[i]));
      if (path.extname(dirList[i]) == ext){
        list += dirList[i] + "\n";
      }
    }
    // console.log("List: " + list);
    callback(list);
  });
}

getDirectory(console.log);






const fs = require("fs");
//requiring path and fs modules
const pathMod = require("path");

//joining path of directory
const directoryPath = pathMod.join(__dirname, "./");
//passsing directoryPath and callback function
let fileArr = [];
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    fileArr.push(file);
    // Do whatever you want to do with the file
    // console.log( "file , fileArr: ", file, fileArr );
    console.log("file", file);
    // return fileArr;
    // specify the path to the file, and create a buffer with characters we want to write
    let path = "./*.js";
    let buffer = Buffer.from(`/*
Result:



*/`);

    // open the file in writing mode, adding a callback function where we do the actual writing
    fs.open(directoryPath, "w", function (err, fd) {
      if (err) {
        throw "could not open file: " + err;
      }

      // write the contents of the buffer, from position 0 to the end, to the file descriptor returned in opening our file
      fs.write(fd, buffer, 0, buffer.length, null, function (err) {
        if (err) throw "error writing file: " + err;
        fs.close(fd, function () {
          console.log("wrote the file successfully");
        });
      });
    });
  });
});

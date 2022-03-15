// read content of unorganised folder and make  an array which has extension name of each file

fs = require("fs")
path = require("path")

fs.readdir(__dirname, 
    { withFileTypes: true },
    (err, files) => {
    console.log("\nCurrent directory files:");
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        console.log(file);
      })
    }
  })
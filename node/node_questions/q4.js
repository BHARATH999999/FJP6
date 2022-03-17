// read content of unorganised folder and make  an array which has extension name of each file

fs = require("fs")
path = require("path")

folderPAth = path.join(__dirname,"..","New_Module_Creation")

let content = fs.readdirSync(folderPAth);

// console.log(content)

let exeArr = [];

for(let i =0 ; i<content.length;i++){
  exeArr[i] = path.extname(content[i]);
}

console.log(exeArr)
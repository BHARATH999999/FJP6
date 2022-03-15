//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
let path = require("path")

if(!fs.existsSync("New_folder")){
fs.mkdirSync("New_folder")}

let filepath = path.join(__dirname,"New_folder","q1_sol.txt")

console.log(filepath)
fs.writeFileSync(filepath,"new file has been made")

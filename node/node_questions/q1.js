//make a folder inside same directory of this file and in that folder make a text file with content
//new file has been made

let fs = require("fs");
let path = require("path")

if(!fs.existsSync("Solutions")){
fs.mkdirSync("Solutions")}

let filepath = path.join(__dirname,"Solutions","q1_sol.txt")

console.log(filepath)
fs.writeFileSync(filepath,"new file has been made")

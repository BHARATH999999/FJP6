//copy q3.html file from node_questions to a new folder inside Solutions having name q3_sol.html

fs = require("fs")
path = require("path")

currentpath = path.join(__dirname,"q3.txt");
let content = fs.readFileSync(currentpath,"utf-8")

destinationpath = path.join(__dirname,"New_folder","q3_sol.txt")
fs.writeFileSync(destinationpath,content);


let fs = require("fs")
// console.log(fs)

let path = require("path")
let filepath = path.join(__dirname,"file.js")

// C-R-U-D OPERATIONS

// C -->Create
fs.writeFileSync(filepath,"console.log(\"Hello I am text file generated from fs.js\")")

let cp = require("child_process")

console.log(""+ cp.execSync("node file.js"))


fs.writeFileSync(filepath,"console.log(\"Content of file.js is over written by fs.js\")")
console.log(""+ cp.execSync("node file.js"))

// R -->Read
let content = fs.readFileSync(filepath,"utf-8")
// console.log(content) //Prints content in Readable form

// content = fs.readFileSync(filepath)
// console.log(content) //Prints content in Binary form[Buffered]

// U -->update -- Append
fs.appendFileSync(filepath,"\nAdded Extra Content at the end of the file of given file path")
content = fs.readFileSync(filepath,"utf-8")
console.log(content)

// D --> Delete
fs.unlinkSync(filepath);

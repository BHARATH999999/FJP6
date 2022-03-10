let fs = require("fs")
// console.log(fs)

let path = require("path")
let filepath = path.join(__dirname,"file.js")

fs.writeFileSync(filepath,"console.log(\"Hello I am text file generated from fs.js\")")

let cp = require("child_process")

console.log(""+ cp.execSync("node file.js"))


let fs = require("fs")
// console.log(fs)

let path = require("path")
// let filepath = path.join(__dirname,"file.js")

// // C-R-U-D Operations

// // C -->Create
// fs.writeFileSync(filepath,"console.log(\"Hello I am text file generated from fs.js\")")

// let cp = require("child_process")

// console.log(""+ cp.execSync("node file.js"))


// fs.writeFileSync(filepath,"console.log(\"Content of file.js is over written by fs.js\")")
// console.log(""+ cp.execSync("node file.js"))

// // R -->Read
// let content = fs.readFileSync(filepath,"utf-8")
// // console.log(content) //Prints content in Readable form

// // content = fs.readFileSync(filepath)
// // console.log(content) //Prints content in Binary form[Buffered]

// // U -->update -- Append
// fs.appendFileSync(filepath,"\nAdded Extra Content at the end of the file of given file path")
// content = fs.readFileSync(filepath,"utf-8")
// console.log(content)

// // D --> Delete
// fs.unlinkSync(filepath);


//------------------------------------------------------------------------------------------------//
//CRUD Operations on Folders

//Create

if(!fs.existsSync("New_Folder_from_fs")){
fs.mkdirSync("New_Folder_from_fs");
}

//Read
let varPath = "E:\\FJP6\\node\\New_Module_Creation" 
let contentOfVariablePAth = fs.readdirSync(varPath)
console.log(contentOfVariablePAth)

//Update
let filepath = path.join(__dirname,"New_Module_Creation","test.txt");
fs.writeFileSync(filepath,"Contents of test.txt")
let filepath1 = path.join(__dirname,"New_Module_Creation","test.txt")
let filepath2 = path.join(__dirname,"test_copy.txt")
fs.copyFileSync(filepath1,filepath2);
fs.unlinkSync(filepath1)//Deleting original file after Copying

//Delete
fs.rmdirSync("New_Folder_from_fs") // Throws Some Error --> we will read another function later

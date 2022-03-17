// console.log("HIi")

// let inputArr = process.argv;

// console.log(inputArr);

// // ['pathToNode','pathToFile','input_passed_in_terminal']
// let input = inputArr[2];
// console.log(input);


let fs = require("fs");

let folderPath = process.argv[2];

// console.log(folderPath);

let folderExists = fs.existsSync(folderPath);

if(folderExists){
    let files = fs.readdirSync(folderPath);
    console.log(files); //Prints all the files in the path given by user
}
else{
    console.log("Please Enter a Valid Path...!");
}
// console.log("HIi")

// let inputArr = process.argv;

// console.log(inputArr);

// // ['pathToNode','pathToFile','input_passed_in_terminal']
// let input = inputArr[2];
// console.log(input);


const { execFileSync } = require("child_process");
let fs = require("fs");
let path = require("path");

let folderPath = process.argv[2];

// console.log(folderPath);

let folderExists = fs.existsSync(folderPath);

let extensions = {
    Audio : [".mp3"],
    Video : [".mp4",".mkv",".webm"],
    Document : [".pdf",".docx",".doc",".xlsx"],
    Software : [".exe"],
    Image : [".jpeg",".jpg",".png"]
}

if(folderExists){
    let files = fs.readdirSync(folderPath);
    // console.log(files); //Prints all the files in the path given by user
    for(let i = 0 ;i<files.length;i++){
        let ext = path.extname(files[i]);
        let nameOfFolder = giveFolderName(ext);
        // console.log(ext);
        // console.log(nameOfFolder);
        let pathOfFolder = path.join(folderPath,nameOfFolder); 
        let exist = fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }
    };
    }
else{
    console.log("Please Enter a Valid Path...!");
}


function giveFolderName(ext){
    for(let key in extensions){
        let extArr = extensions[key];

        for(let i = 0;i <extArr.length;i++){
            if(extensions[key][i] == ext){
                return key;
            }
        }
    }
    return "Others";
}

function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}
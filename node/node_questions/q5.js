//move a file

fs = require("fs")
path = require("path")

function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath = path.join(folderPath,fileName);
    let destinationPath = path.join(pathOfFolder,fileName);
    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}

// if(!fs.existsSync("q5_move.txt")){
//     fs.mkdirSync("q5_move.txt");
//     }

// fs.unlinkSync(destinationPath)



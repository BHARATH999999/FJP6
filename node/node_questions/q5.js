//move a file

fs = require("fs")
path = require("path")

const currentPath = path.join(__dirname, "q5_move.txt");
const destinationPath = path.join(__dirname, "New_folder", "q5_move.txt");

fs.rename(currentPath, destinationPath, function (err) {
    if (err) {
        throw err
    } else {
        console.log("Successfully moved the file!");
    }
});

// if(!fs.existsSync("q5_move.txt")){
//     fs.mkdirSync("q5_move.txt");
//     }

// fs.unlinkSync(destinationPath)



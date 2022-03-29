const fs = require("fs");

console.log("Before ");

fs.readFile("file.txt",cd);

function cd(error,data){
    if(error){
        console.log(error);
    }
    else{
        console.log(data+"");
    }
}

console.log("After");
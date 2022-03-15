// given an array arr=[audio,video,image,software,documents,applications,other]
//make folder for each element in the given array and inside each folder make 4 files of that type

let fs = require("fs");
let path = require("path")

let arr=['audio','video','image','software','documents','applications','other']
let name = ['1','2','3','4']
let ext = ['.mp3','.mp4','.jpeg','.exe','.pdf','.apk','.rar']


let OrganisedPath = path.join(__dirname,"Organise")
if(!fs.existsSync("Organise")){
    fs.mkdirSync("Organise")}

for (let i= 0; i < arr.length; i++) {
    let folderPath = path.join(__dirname,"Organise",arr[i])
    if(!fs.existsSync(folderPath)){
        fs.mkdirSync(folderPath)}
    for(let j =0;j<name.length;j++){
        let filename = name[j] + ext[i]
        let filepath = path.join(folderPath,filename)
        fs.writeFileSync(filepath,"")
    }
}
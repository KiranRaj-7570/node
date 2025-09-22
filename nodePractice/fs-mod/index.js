const fs=require("fs");

//synchronous Read
const FileRead=fs.readFileSync("./file.txt","utf-8")
console.log(FileRead);

//asynchronous Read
fs.readFile("./file.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})

//synchronous Write
fs.writeFileSync("./greet.txt","Good Evening")

//Asynchronous Write
fs.writeFile("./greet.txt","Good Morning",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('File Written');
    }
})
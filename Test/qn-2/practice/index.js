const fs = require('fs');
const path = require('path');

fs.writeFileSync('./notes.txt',"Learning Node.js is fun!");
fs.appendFileSync('./notes.txt'," Welcome to Node.js")

const FileRead=fs.readFileSync('./notes.txt','utf-8');
console.log(FileRead);
const filepath=path.resolve('notes.txt')
console.log(filepath);
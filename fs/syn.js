// ---- Module fs ----
//1. Way to create the file with content 
const fs= require('fs');

const fileName="test.txt";

// syntax: fs.writeFileSync(fileURLToPath, data , options)
const writeFile = fs.writeFileSync(fileName,"Hey this my custom text","utf-8");
console.log(writeFile);


//2. Way to update the exiting file content 
const path=require('path');
const filepath = path.join(__dirname,fileName);
const writeFile_updated = fs.writeFileSync(filepath,"Hey this my custom text (Updated)","utf-8");
console.log(writeFile_updated);


//3. Way to delete the file 
const del= fs.unlinkSync(filepath);
console.log(del);

//4. Way to renamefile the file 
const updatename="updated_test.txt"; //new
const filepath_updated=path.join(__dirname,updatename); //new path

const rename=fs.renameSync(fileName,filepath_updated) // renamecurrent one name or file

console.log(rename);
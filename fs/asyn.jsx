const fs= require('fs');

const writeFile="test.js";
// syntax: fs.writeFileSync(fileURLToPath, data , options)
fs.writeFileSync(__filename,"Hey this my custom text","utf-8");
console.log(writeFile);

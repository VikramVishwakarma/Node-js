global.console.log('hey');
globalThis.console.log('good');
globalThis.console.log(module);

// First way to import module 
// const add= require("./math")

// second way to add the module or to import 
const {add,sub,multi} = require("./math")
const path = require("path")
console.log(add(59,180));
console.log(sub(59,2));
console.log(multi(59,2));


http = require('node:http');
listener = function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/html
   response.writeHead(200, {'Content-Type': 'text/html'});
  
   // Send the response body as "Hello World"
   response.end('<h2 style="text-align: center;">Hey Buddy js lonner</h2>');
};

server = http.createServer(listener);
server.listen(3000);

// Console will print the message

console.log('Server running at http://127.0.0.1:3000/');

// directory 
console.log(__filename)
console.log(__dirname)

// Custom directory 
const filepath = path.join("Floder","students","books.js")
console.log(filepath);

const parsedata= path.parse(filepath);
const resolvepath= path.resolve(filepath);
const extname= path.extname(filepath);
const basename= path.basename(filepath);
const dirname= path.dirname(filepath);

console.log(parsedata,resolvepath,extname,basename,dirname);

//Os 
const os = require("os");

console.log("\n"+os.platform());

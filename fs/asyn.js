const fs= require('fs');

//way to create the file with content using async of fs module
const fileName="new_test.txt";
fs.writeFile(fileName,"This is content from async",
    (err)=>{
        if(err){
            console.log(err);
        }         

    }
)




const fs=require('fs');

// fs.readFile('./docs/hello.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile("./docs/hello.txt","Hello World",()=>{
//     console.log("File was written");
// });
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("Folder created");
// });

// }else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("Folder deleted");
//     })   
// }

// if (fs.existsSync('./docs/hello.txt')) {
//     fs.unlink('./docs/hello.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("File deleted");
//     }) 
// }
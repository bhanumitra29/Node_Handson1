const Store = require('./Store')
const http = require("http")
const Data = JSON.stringify(Store)

const ServerApp = http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.write("Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code on the server. It uses an event-driven, non-blocking I/O model that makes it well-suited for building scalable and efficient network applications. Node.js is often used to build web servers, real-time applications, and command-line tools.")
        res.end();
    }

    else if(req.url==='/posts' && req.method=='GET'){
        res.write(Data)
        res.end();
    }
    else if(req.url==='/page2'){
        res.write("<h1>This is Page 2</h1>")
        res.end();
    }
    else{
        res.write('404 Page not Found!');
        res.end();
    }
})

ServerApp.listen(4000,()=>{
    try{
        console.log('server is running on port no: 4000')
    }
    catch(err){
        console.log('error',err)
    }
})
const http=require('http')
const fs=require('fs')
const PORT=process.env.PORT;


const server=http.createServer((req,res)=>{

    const handleReadFile=(fileName,statusCode)=>{
        fs.readFile(fileName,"utf-8",(err,data)=>{
            if(err){
               console.log(err)
            }
            else{
               res.writeHead(statusCode,{"Content-Type":"text/html"})
               res.write(data)
               res.end() // if i end response that time i use it
            }
          })
    }


  if(req.url==="/"){
   handleReadFile("index.html",200,req,res)
  }
  else if(req.url==="/contact"){
    handleReadFile("contact.html",200)
  }
  else if(req.url==="/about"){
    handleReadFile("about.html",200)
  }
  else{
    handleReadFile("error.html",404)
  }
})

server.listen(PORT,()=>{
  console.log("server is running");
})
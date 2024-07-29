const http = require("http")

const server = http.createServer((req,res)=>{
if(req.url ==="/home" && req.method ==="GET"){
    res.write(`Welcome to home page`)
    res.end()
}
else if(req.url === "/cart"){
    res.write("WeLcome to cart page")
    res.end();
}

else{
    res.write("404 Page not found please try again")
    res.end()
}
})


server.listen(8080,()=>{
    console.log("Now Server is running on port 8080")
})
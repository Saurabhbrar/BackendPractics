const express = require("express")
const server = express()
const PORT = 3032


const midd = (req,res,next) =>{
    const gate = true
    if(gate){
        next() /*Going to Home*/
    }

    else{
        next()
         console.log("This is a the Else") 
    }
}

server.use(midd)
 server.get("/home",(req,res) =>{
    console.log("if")
}) 

server.get("/ground",(req,res) =>{
    console.log("Going to Ground")
})

server.listen(PORT,() => {
    console.log(`Server is live on ${PORT}`)
})
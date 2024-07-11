const express = require("express")
const server = express()
const fs = require("fs");



server.use(express.json())
const PORT = 3001;
/* create the EndPoint */


 server.get("/home" , (req,res) => {
    res.send("Welcome to Homepage")
})

server.get("/cart" , (req,res) => {  
    res.send("Welcome to Cart")
})

server.post("/add-data" , (req,res) => {
    let incomingdata = req.body
    const userData = fs.readFileSync("/db.json","utf-8")
    const parsedData = JSON.parse(userData)
    parsedData.data.push(incomingdata)
    fs.writeFileSync("./db.json", JSON.stringify(parsedData))
    console.log(incomingdata)
    res.send(`data recieved sucsessfully ${parsedData}`)
})


server.listen(PORT , ()=> {
    console.log(`server is running on ${PORT}`)
    
})
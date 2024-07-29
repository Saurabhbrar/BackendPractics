const http = require("http")
const fs  = require("fs")
const path = require("path")
const express = require("express")
const PORT = 3005

const server = express()


server.get("/home",(req,res)=>{
    res.send(` <h1 style="color: green;">This is homepage</h1>`);

})






server.listen(PORT , () =>{
    console.log(`server is running on ${PORT}`)
})
const express = require("express")
const PORT = 3231
const server = express()

const middleware1 = (req, res, next) => {
    console.log(1)
    next()
    console.log(2)
}
const middleware2 = (req, res, next) => {
    console.log(3)
    next()
    console.log(4)
}

/* server.use() */

 server.get("/school", [middleware1, middleware2] ,(req, res) => {
    console.log(5)

    res.send(`Welcome to School`)
}) 

  server.get("/cart",(req,res) =>{
    console.log(6)
    res.send(`Welcome to Cart`)
}) 


server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

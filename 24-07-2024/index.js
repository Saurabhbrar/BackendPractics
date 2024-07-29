const express = require("express")
const PORT = 3231
const server = express()

const gateKeepar = (req, res, next) => {
    const id_card = true
    if (id_card) {
        next()
    }
    else {
        res.send("You need an ID card")
    }
}

server.use(gateKeepar)


 server.get("/school", (req, res) => {
    res.send(`Welcome to School`)
}) 





server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

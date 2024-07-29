const express = require("express");
const fs = require("fs")
const server = express()
const PORT = 3001
server.use(express.json());
const path = require('path');
const filePath = path.join(__dirname, 'documents', 'db.json');



server.get("/userData", (req, res) => {
    /* res.send("welcome to homepage") */
    let data = fs.readFileSync("./db.json", "utf-8")
    res.send(data)
    console.log(data)

})




server.post("/add_data", (req, res) => {
    let incomingdata = req.body
    const userData = fs.readFileSync("./db.json","utf-8")
    const parsedData = JSON.parse(userData)
    parsedData.data.push(incomingdata)
    fs.writeFileSync("./db.json",JSON.stringify(parsedData))
    res.send(`Data recived successfully ${parsedData}`)
    console.log(parsedData)
}
)



server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
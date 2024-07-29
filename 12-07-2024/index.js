console.log("first")

const fs = require("fs")
const data = fs.readFileSync("./text.txt","utf-8")
console.log(data,"  second")


const data2 = fs.readFile("./text.txt","utf-8",(err,res) =>{
    if(err){
        console.log(err)
    }

    else{
        console.log(`this is third data `)
    }
})

console.log("fourth")
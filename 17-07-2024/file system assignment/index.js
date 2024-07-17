
    const fs = require("fs")
    let operation1 = process.argv[2]
    let operation2 = process.argv[3]

    if(operation1 === "read" && operation2 == "file.txt"){
        fs.readFile("./file.txt", "utf-8", (err, res) => {
            const operation = process.argv
            let mycommand = operation[2]
            if (mycommand === "read") {
                console.log(res)
            }})
    }

    else if (operation1 === "append"){
      
        fs.appendFile("./file.txt", ` ${process.argv[3]}` ,"utf8",(res)=>{
            console.log("Append successfully")
        })
    }

    else if (operation1 === "delete"){

    }



    








/* let addData = fs.writeFile("./file.txt","this is the updated code from me on this file",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
}) */
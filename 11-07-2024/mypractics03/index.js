
/* let operation = process.argv[2]
let a = process.argv[3]
let b = process.argv[4]


if(operation == "sum"){
    sum(Number(a),Number(b))
}

function sum(a,b){
    console.log(a+b)
} */

    // Asynchronous
const {
    randomInt,
  } = require('node:crypto');
  
  randomInt(500, (err, n) => {
    if (err) throw err;
    console.log(`Random number is  ${n}`);
  });
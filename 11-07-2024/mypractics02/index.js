/* const crypto = require(crypto)

const args = process.args[2]
const operation = parseFloat(process.args[3])
const number = parseFloat(process.argv[4]) */

const crypto = require('crypto'); // Corrected require statement with quotes around module name

const args = process.argv[2]; // Corrected 'argv' spelling and indexing
const operation = parseFloat(process.argv[3]); // Corrected 'argv' spelling and indexing, and parsed as float
const number = parseFloat(process.argv[4]); // Corrected 'argv' spelling and indexing, and parsed as float

// Now, 'args', 'operation', and 'number' hold values from command line arguments

console.log(process.argv)
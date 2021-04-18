//-----------> Some setup notes...

// const fs = require('fs')

// //First is name of the file, second is the data we wanna write 
// //Will over write! 
// fs.writeFileSync('notes.txt', 'Hey! Here is more!')

// fs.appendFileSync('notes.txt', `\nHere is my added work complete!`)

//Importing file method need to assign  to a variable as the import gives a return value
const add = require('./utils.js');
const fart = require('./gassy.js');


const result = fart('farting', 'bananas')

console.log(result);

console.log(add(44, 55));
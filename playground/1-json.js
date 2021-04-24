const fs = require('fs')
//Making a book object into JSON
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// //Convert object to JSON
// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

//Convert JSON back to object 
// const parsedBook = JSON.parse(bookJSON)

// console.log(parsedBook.title);

//Creating and writing this JSON data to a file 
// fs.writeFileSync('1-json.json', bookJSON)


// //Reading the JSON file, comes in initially as buffered binary
// const dataBuffer = fs.readFileSync('1-json.json')
// //So...converting to a JSON string 
// const dataJSON = dataBuffer.toString()
// //converting to an object 
// const data = JSON.parse(dataJSON)
// //Shows the buffered data...
// console.log(dataBuffer);

// //Getting the data back as a string
// console.log(dataBuffer.toString());

// console.log(data);
// console.log(data.title);
// console.log(data.author);



//JSON Challenge
//1.Load and parse the JSON data
//2. Change the name and age property to my own
//3. Stringify the changed object and overwrite the original data
//4. Test the work by viewing data in the JSON file

const dataBuffer = fs.readFileSync('1-json.json')
const data = dataBuffer.toString()
const infoObj = JSON.parse(data)

infoObj.name = "Justin"
infoObj.age = 40

const newString = JSON.stringify(infoObj)

fs.writeFileSync('1-json.json', newString)

console.log(newString);
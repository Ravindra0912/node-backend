const fs = require('fs');

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')

// console.log('dataBuffer',dataBuffer.toString());

const dataBuffer = fs.readFileSync('1-json.json');
const details = JSON.parse(dataBuffer);
details.name = "Ravindra";
details.age = 25;
details.planet = "Mars"

fs.writeFileSync('1-json.json', JSON.stringify(details))
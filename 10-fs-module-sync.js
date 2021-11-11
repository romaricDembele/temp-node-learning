const {readFileSync, writeFileSync, writeFile} = require('fs');

writeFileSync('./content/first.txt', 'First text file');
writeFileSync('./content/second.txt', 'Second text file');

const firstFile = readFileSync('./content/first.txt', 'utf8');
const secondFile = readFileSync('./content/second.txt', 'utf8');

console.log(firstFile);
console.log(secondFile);
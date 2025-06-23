// Assignment 7: Core Path and FS Modules in Node.js
const path = require('path');
const fs = require('fs');

// Path module example
const filePath = path.join(__dirname, 'example.txt');
console.log('Joined path:', filePath);

// FS module example: Write and read a file
fs.writeFileSync(filePath, 'Hello, FS module!');
const data = fs.readFileSync(filePath, 'utf-8');
console.log('File content:', data);

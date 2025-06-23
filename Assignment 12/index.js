// Assignment 12: Perform CRUD Operations on a File Using the FS Core Module in Node.js
const fs = require('fs');
const file = 'crud.txt';

// Create
fs.writeFileSync(file, 'Hello CRUD!');
// Read
console.log('Read:', fs.readFileSync(file, 'utf-8'));
// Update
fs.appendFileSync(file, '\nAppended line.');
console.log('Updated:', fs.readFileSync(file, 'utf-8'));
// Delete
fs.unlinkSync(file);
console.log('File deleted.');

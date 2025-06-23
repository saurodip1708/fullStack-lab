// Assignment 9: Describing Local Modules in Node.js
// localModule.js (create this file in the same folder):
// module.exports = function() { return 'Hello from local module!'; };

const localModule = require('./localModule');
console.log(localModule());

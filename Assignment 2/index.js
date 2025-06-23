// Assignment 2: Node.js Programs for User Input and System Variables
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});

console.log('System Variables:');
console.log('Process ID:', process.pid);
console.log('Node Version:', process.version);
console.log('Platform:', process.platform);

// Assignment 10: Create a package.json file for a Node.js project and describe its setup with an external package like dotenv
// To create package.json: run `npm init -y` in terminal
// To install dotenv: run `npm install dotenv`

require('dotenv').config();
console.log('Your ENV variable:', process.env.MY_VAR);
// Add MY_VAR=somevalue in a .env file

// Assignment 14: Create a Node.js Project Using Express to Respond with HTML and JSON
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello, Express!</h1>');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Hello, JSON!' });
});

app.listen(3002, () => console.log('Express server running on port 3002'));

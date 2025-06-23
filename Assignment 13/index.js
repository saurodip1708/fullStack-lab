// Assignment 13: Create a Node.js Project for a Calculator with Multiple Routes
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname, query } = parsedUrl;
  let result;
  if (pathname === '/add') {
    result = Number(query.a) + Number(query.b);
  } else if (pathname === '/subtract') {
    result = Number(query.a) - Number(query.b);
  } else if (pathname === '/multiply') {
    result = Number(query.a) * Number(query.b);
  } else if (pathname === '/divide') {
    result = Number(query.a) / Number(query.b);
  } else {
    res.writeHead(404);
    res.end('Not found');
    return;
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Result: ' + result);
});
server.listen(3001, () => console.log('Calculator server running on port 3001'));

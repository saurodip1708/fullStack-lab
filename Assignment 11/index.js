// Assignment 11: Create a Server Using the HTTP Core Module and Handle Routes with Different HTTP Methods
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('GET request received!');
  } else if (req.method === 'POST' && req.url === '/data') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('POST request received!');
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});
server.listen(3000, () => console.log('Server running on port 3000'));

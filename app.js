const http = require('http');
http.createServer((req, res) => {
  res.end('Hello from DevOps Pipeline! v1\n');
}).listen(3000);

//http request is readable stream

const http = require('http');

http.createServer((req, res) => {
  req.on('data', data => {
    res.write(data)
  });
  req.on('end', () => res.end());
}).listen(3000);
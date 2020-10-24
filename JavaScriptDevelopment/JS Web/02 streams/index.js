//http request is readable stream

// const http = require('http');
// const fs = require('fs');
//
// http.createServer((req, res) => {
//   const readStream = fs.createReadStream('./data.txt', {highWaterMark: 1});
//   readStream.pipe(res);
// }).listen(3000);
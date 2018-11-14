const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  var uri = url.parse(req.url).pathname;
  var filename = path.join(process.cwd(), "static", uri);
  fs.exists(filename, function(exists) {
    if (!exists) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('404 Not Found\n');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      var fileStream = fs.createReadStream(filename);
      fileStream.pipe(res);
      res.end()
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

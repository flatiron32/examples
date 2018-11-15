const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  date = new Date()
  html = `<!DOCTYPE html><html><head><meta charset='utf-8'><title></title></head><body>${date}</body></html>`
  res.end(html)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const http = require('http'); //standard node server

http
  .createServer((req, res) => {
    console.log('serving reqq',res);
    res.writeHeader(200, { 'Content-Type': 'text/plain' });
    res.end('hello');
  })
  .listen(1337);
  console.log('serving');
  

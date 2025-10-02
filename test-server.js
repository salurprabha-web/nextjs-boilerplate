const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Test Server</title></head>
      <body>
        <h1>Simple Node.js Server Working!</h1>
        <p>If you can see this, Node.js is working fine.</p>
        <p>The issue might be with Next.js configuration.</p>
      </body>
    </html>
  `);
});

server.listen(3002, () => {
  console.log('Test server running on http://localhost:3002');
});

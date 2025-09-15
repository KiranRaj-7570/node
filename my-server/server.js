import http from 'http';

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(
        `<html>
            <head><title>My Server</title></head>
            <body><h1 style="text-align:center; color:green;">Hello, World</h1></body>
        </html>`
    );
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
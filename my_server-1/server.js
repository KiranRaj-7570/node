import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    
    if (parsedUrl.pathname === '/greet') {
        const name = parsedUrl.query.name || 'guest';
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello, ${name}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }   
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

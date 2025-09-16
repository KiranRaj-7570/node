import http from 'http';

function logger(req, res, next) {
    console.log(`[LOG] ${req.method}-${req.url}`);
    next();
}

function auth(req, res, next) {
    if(req.url=='/Secret') {
        res.writeHead(401, { 'Content-Type': 'text/plain' });
        res.end('Access Denied');
    }
    else {
        next();
    }
}

function finalHandler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Request passed all the Middlewares!');
}

const server = http.createServer((req, res) => {
    logger(req, res, () => {
        auth(req, res, () => {
            finalHandler(req, res);
        });
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
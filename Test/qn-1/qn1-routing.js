const http = require("node:http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end("Hello World")
    }
    else if(req.url =="/about"){
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end("About Page")
    }
    else{
        res.writeHead(404)
        res.end("page not found!")
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
})
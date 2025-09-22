const http = require("node:http");



const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end("Home Page")
    }
    else if(req.url=="/about"){
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end("About Page")
    }
    else if(req.url=="/contact"){
        res.writeHead(200, {
            "content-type": "text/plain"
        })
        res.end("Contact Us")
    }
    else{
        res.writeHead(404)
        res.end("page not found1")
    }
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the homepage')
    }else if (req.url === '/about') {
        res.end('Want to more know about the company ?')
    } else {
        res.end('<h1>Oops!, Wrong url</h1> <a href="/">Home page</a>')
    }
});

server.listen(5000);
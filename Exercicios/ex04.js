/**
 * Exercise 4 - HTTP Server with routes
 *
 * Creates a basic HTTP server that listens on port 3000
 * and responds differently based on the requested URL.
 *
 * Usage: node ex04.js
 * Then open the browser at:
 *   localhost:3000        → Welcome to my server!
 *   localhost:3000/about  → This is a Node.js server
 *   localhost:3000/time   → current date and time
 *   localhost:3000/other  → Route not found (404)
 *
 * http.createServer()        - creates the server, callback runs on every request
 * req.url                    - the URL path requested by the browser
 * req.method                 - the HTTP method used (GET, POST, etc.)
 * res.writeHead(statusCode)  - sets the HTTP status code of the response
 * res.end()                  - sends the response and closes the connection
 * server.listen(port)        - starts the server and listens for requests on the given port
 * new Date().toLocaleString() - returns the current date and time as a string
 */

const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to my server!');
    
    }else if(req.url === '/about'){
        res.end('This is a Node.js server');
    
    }else if(req.url === '/time'){
        res.end(new Date().toLocaleString())
    
    }else{
        res.writeHead(404)
        res.end('Route not found!')
    }
})

server.listen(3000,() =>{
    console.log('Server runnig at port 3000')
}) 
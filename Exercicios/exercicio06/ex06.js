/**
 * Exercise 6 - HTTP Server with HTML form and file writing
 *
 * Creates an HTTP server that serves an HTML form and handles form submissions.
 * Submitted messages are appended to a messages.txt file.
 *
 * Usage: node ex06.js
 * Then open the browser at localhost:3000
 *
 * GET /         → serves an HTML page with a text input form
 * POST /message → reads the submitted message from the request body,
 *                 appends it to messages.txt and redirects to /
 *
 * req.method              - HTTP method of the incoming request (GET, POST, etc.)
 * req.url                 - URL path of the incoming request
 * req.on('data', chunk)   - event fired when a piece of the request body arrives
 * req.on('end')           - event fired when the full request body has been received
 * querystring.parse()     - converts a URL encoded string into an object
 *                           ex: 'message=Hello' → { message: 'Hello' }
 * fs.appendFile()         - appends content to a file, creates it if it doesn't exist
 * res.writeHead(302)      - status code for redirection
 * Location header         - tells the browser where to redirect to
 */

const queryString = require('querystring');
const fs = require('fs')
const http = require('http');


const server = http.createServer((req, res) => {

    if(req.method === 'POST' && req.url === '/message'){

        let body = ''

        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', () => {
            const parsed = queryString.parse(body)
            const message = parsed.message

            fs.appendFile('messages.txt', message + '\n',(err) => {
                if(err){
                    res.writeHead(500)
                    res.end('Something went wrong')
                
                }else{
                    res.writeHead(302, {'location':'/'})
                    res.end()  
                }
            })
        })
    }

    if(req.method === 'GET' && req.url === '/'){
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end(` <html>
            <body>
                <form action='/message' method='POST'>
                    <input type='text' name='message' required>
                    <button type='submit'>Send</button>
                </form>
            </body>
        </html>`)
    }

})


server.listen(3000, () => {
    console.log('Server runnig at port 3000')
})
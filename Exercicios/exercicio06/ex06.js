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
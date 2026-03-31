/**
 * Exercise 5 - Static file web server
 *
 * Creates an HTTP server that listens on port 5000 and serves static files
 * from the "public" directory. The file name is obtained from the query string
 * of the HTTP request.
 *
 * Example requests:
 *   localhost:5000/?file=WebProgII.html  → serves the HTML file
 *   localhost:5000/?file=data.txt        → serves the text file
 *
 * If the "file" parameter is missing in the request, the server returns:
 *   400 Bad Request
 *
 * If the requested file does not exist, the server returns:
 *   404 Not Found
 * and displays a list of available files inside the public directory.
 *
 * Modules used:
 *   http  - creates the HTTP server
 *   fs    - reads files and directories from the file system
 *   url   - parses the request URL and extracts query parameters
 *   path  - utilities for handling file paths (e.g., file extensions)
 *
 * Key concepts:
 *   query string            - parameters passed in the URL (e.g., ?file=name)
 *   fs.readFile()           - reads a file from disk
 *   fs.readdir()            - lists files inside a directory
 *   res.writeHead(status)   - sets the HTTP response status code
 *   res.write() / res.end() - sends content back to the browser
 */

const http = require('http')
const fs = require('fs')
const url = require('url')


const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true)
    const query = parsedUrl.query

    if(!query.file){
        res.writeHead(404)
        res.end('Bad request Key file not found in request')
        return
    }

    const filePath = './public/' + query.file

    fs.readFile(filePath, (err, data) => {

        if(err){
            res.writeHead(404, {'Content-Type' : 'text/html'})
            res.write('File not found. <br><br>')
            res.write('Avaliable files: <br>')

            fs.readdir('./public/',(err, files) =>{
                for(let file of files){
                    
                    res.write(`<a href="/?file=${file}">${file}</a><br>`)
                }
                res.end()
            })
       
        }else{
            res.writeHead(200)
            res.end(data)
        }
    })

})

server.listen(5000, () =>{
    console.log('Server runnig at port 5000')
})
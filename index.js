var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });  
    } else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.write('<img src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c72676d70b3eb8d6748490069849320c&auto=format&fit=crop&w=1050&q=80"/>');
            response.end();
    }
});
server.listen(9000);
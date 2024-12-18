var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req,res) {

  console.log("Request from",req.url);

  if(req.url === "/home" || req.url === "/"){

    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/new.html').pipe(res);

  }
  else if (req.url === "/contact") {
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/ct.html').pipe(res);
  }
  else{
    res.writeHead(404,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(res);
  }

});

server.listen(3000,'127.0.0.1');
console.log('Connected');

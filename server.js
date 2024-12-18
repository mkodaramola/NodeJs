var http = require('http');

var fs = require('fs');
var x;

var list = {
  darafem:"femi.txt",
  AduE:"adu.txt",
  faith:"isaac.txt",
  davies:"kunle.txt"
}

var  rFile = function (val){
return fs.readFileSync(val,'utf8');
}

console.log(req.url);
const server = http.createServer(function(req,res){
}
  res.writeHead(200,{'Content-Type':'text/plain'});
  var klist = Object.keys(list);

  for (var i = 0; i < klist.length; i++) {
  var nkey = `/${klist[i]}`;
  if(req.url == nkey) {
    res.write(rFile(list[klist[i]]));
    break;

  }

  res.end();
});

server.listen(3000,'127.0.0.1');
console.log('Connected');

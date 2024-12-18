var fs = require('fs');

var Rst = fs.createReadStream(__dirname+'/femi.txt', 'utf8');

var Wst = fs.createWriteStream(__dirname+'/wrt.txt');

Rst.on('data',function (chunk) {
  console.log("chunk receive: \n",chunk);
   Wst.write(chunk);

})

var e = require('events');
var myEmitter = new e.EventEmitter();

myEmitter.on('someE', function(mes) {
  console.log(mes);
} );

myEmitter.emit('someEa','show this on screen');

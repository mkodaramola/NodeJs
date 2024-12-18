var e = require('events');
var util = require('util');

var man = function(name){
  this.name = name;
  age = 22;
  this.text = this.name + this.name;
}

util.inherits(man,e.EventEmitter);

var nFemi = new man('Femi');
var nKenny = new man('Kenny');
var nEmma = new man('Emmanuel');

var people = [nFemi,nKenny,nEmma];

people.forEach((person) => {
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  });
});

nFemi.emit('speak','Hmmmm.... Hmmmm....');

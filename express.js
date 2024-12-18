var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended:false});

app.set('view engine','ejs');


app.use('/assests',express.static('assests'));

app.get('/', function(req,res){
  res.sendFile(__dirname+'/new.html');
});
app.get('/home', function(req,res){
  res.sendFile(__dirname+'/new.html');
});
app.get('/reg', (req, res) => {
  res.render('reg',{});
});

app.post('/reg',urlencodedParser ,(req, res) => {
     console.log(req.body);
     res.render('RegDet.ejs',{
       det:req.body
     });
});

app.get('/contact', (req, res) => {
  console.log(req.query);
  res.render('contact',{
    qs:req.query
  });
});


app.get('/profile/:usern', (req, res) => {


  var students = {
      emma: {
        firstName: "Ajayi",
        secondName: "Emmanuel",
        gender: "Male",
        field: ["Automation","Mechatronic Engineering","Audio"],
        level: "Senior"
      },

      quadri: {
        firstName: "Atanda",
        secondName: "Quadri",
        gender: "Male",
        field: ["Audio","Automation","Electronics"],
        level: "Senior"
      },

      femi:{
        firstName: "Daramola",
        secondName: "Oluwafemi",
        gender: "Male",
        field: ["Robotics","Automation","Electronic"],
        level: "Shana"
      },

      kenny: {
        firstName: "Omogbolahan",
        secondName: "Kehinde",
        gender: "Male",
        field: ["Audio","Automation","Solar/Electrical Installation"],
        level: "Boss"
      },

      taiwo:{
        firstName: "Omogbolahan",
        secondName: "Taiwo",
        gender: "Male",
        field: ["Cake","Pepper Soup","Noodles"],
        level: "CEO"
      }

  };


  res.render('profile',{
  student: students,
  usern: req.params.usern
  });


});

app.listen(3000);
console.log('Connected');

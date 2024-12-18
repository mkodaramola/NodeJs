const mongoose = require('mongoose');
var bp = require('body-parser');
const fs = require('fs');
const multer = require('multer');

const url = 'mongodb+srv://oluwafemi:oluwafemi@cluster0.bkex8.mongodb.net/Register?retryWrites=true&w=majority';
var uep = bp.urlencoded({extended:false});
var passwCorrect = false;

//define storage fo the Image
const storage = multer.diskStorage({

  //destination for file
  destination: function(req,file,callback){

    callback(null,'./public/uploads/images');

  },

  //add back the extension
  filename: function(req,file,callback){
    callback(null,Date.now()+file.originalname);
  }

});

//upload parameter for multer

  const upload = multer({
    storage:storage,
    limits:{
      fieldSize: 1024*1024*3
    }
  })

module.exports.connectDB = async(err)=>{

  if(err) throw err;
  await mongoose.connect(url,{
    useUnifiedTopology: true,
    useNewUrlParser:true
  });

  console.log('db Connected');

}

const sch = new mongoose.Schema({
  name: String,
  age: String,
  email: String,
  telephone: String,
  username: String,
  password: String,
  img:String

});

const db = mongoose.model('db',sch);

module.exports.router = function(app){


  app.get('/',(req,res)=>{

    var incp = {
      icp: ""
    }

  res.render('login',{info:incp});

  });




  app.get('/login',(req,res)=>{

    var incp = {
      icp: ""
    }

  res.render('login',{info:incp});

  });

var user;


  app.post('/login',uep,(req,res)=>{
    var un = req.body.username;
    var pw = req.body.password;
    console.log("Entered Username:",un);
    console.log("Entered Password:",pw);

       db.find({username:un}).where('password').equals(pw).select('name age email telephone img').exec(function(err,data){
        if(err){
          throw err;
          return;
        }
        else{
          console.log(data);
          user = data;

          if(data.toString() == "") {
            var incp = {
              status: "*Incorrect Password/Username"
            }
          console.log("Incorrect Password/Username");

          res.render('login',{info:incp});
          passwCorrect = false;
        }

        else{
          passwCorrect = true;
         }

        }

      });



  });
app.get('/details', (req,res)=>{

  if(passwCorrect == false){
    var incp = {
      status: "Incorrect Password/Username"
    }

  res.render('login',{info:incp});
  }
  else{
       res.render('details',{detl:user[0]});
  }

});

  app.get('/signup', (req, res) => {
    res.render('register',{});
  });



  app.post('/signup',uep, upload.single('image') ,(req, res) => {
    req.body.img = req.file.filename;
    console.log(req.body);

    console.log(req.file);



    var det = db(req.body).save((err,data) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.json(data);
        console.log('Data Saved Succesfully');
      }
    });

  });


}

var bp = require('body-parser');
var uep = bp.urlencoded({extended:false});

//var data = [{item:'get milk'},{item:'walk dog'},{item:'rest on couch'},{item:'Fellowship'},{item:'Coding'}];
// 197.210.28.9

//mongodb+srv://oluwafemi:<password>@cluster0.bkex8.mongodb.net/<dbname>?retryWrites=true&w=majority
const mongoose = require('mongoose');
const url = 'mongodb+srv://oluwafemi:oluwafemi@cluster0.bkex8.mongodb.net/dbTodo?retryWrites=true&w=majority';

// connect to database
 module.exports.connectDB = async(err) => {
   if(err) throw err;
  await mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser:true
});
  console.log('db connected');
}


// Set Schema for data - format
  const sch = new mongoose.Schema({
    item:String
  });

// create a model to (1)save data to mongoDB (2) find/receive data from mongoDB
  const mUser = mongoose.model('mUser',sch );


module.exports.router = function (app){
  app.get('/home', (req, res) => {
    //get all data from mongodb
    mUser.find({}, function(err,data){
      if (err) throw err;

      // render to the client: (todo.ejs + data from mongoDB)
        res.render('todo',{todos:data});

    });

  });

  app.post('/home',uep,(req, res) => {
//get data from view and save to mongoDB
      var nTodo = mUser(req.body).save((err,data) => {
        if (err) {
          console.log(err);
          return;
        } else {
          res.json(data)
        }
      });
        console.log(req.body);

  });

  app.delete('/home/:Ditem', (req, res) => {

    mUser.find({item:req.params.Ditem.replace(/\-/g," ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
    });

    console.log(req.params.Ditem);
  //   data = data.filter(function(d){
  //     return d.item.replace(/ /g,"-") !== req.params.Ditem;
  //   });
  // res.json(data);
  });


}

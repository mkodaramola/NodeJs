let bodyparser = require('body-parser');
let fs = require('fs');
let uep = bodyparser.urlencoded({extended:false});


module.exports.router = function(app){
  let urn2 = {
    msg:""
  }
  app.get('/', (req, res) => {
    res.render('wlcmPg',{msg:urn2});
  });

  app.get('/login', (req, res) => {

    res.render('wlcmPg',{msg:urn2})
  });


  let regC = false;

  app.post('/login',uep, (req, res) => {

    let db1 = fs.readFileSync('./public/assets/db.json','utf8');
    let Odb = JSON.parse(db1);

    let cIndex = 1;

    for(let i=1;i<Object.keys(Odb).length+1;i++){
      let dbuser = "user" + i;

      if(req.body.regNo === Odb[dbuser][0]) {
        regC = true;
        cIndex = i;
        break;
      }

    }

    if(regC === true){
      let cUser = "user"+cIndex;
      let data = {
        regNo: Odb[cUser][0],
        surname:Odb[cUser][1],
        firstname:Odb[cUser][2],
        gender:Odb[cUser][3]
      }
      res.render('introPg',{reg:data});
      regC = false;
    }
    else{
      let urn = {
        msg:"Unregistered Registration Number"
      }
      res.render('wlcmPg',{msg:urn})
    }


  });


}

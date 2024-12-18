let bodyparser = require('body-parser');
let fs = require('fs');
let uep = bodyparser.urlencoded({extended:false});

module.exports.router = function(app){

    app.get('/', (req, res) => {
      res.render('intro');
    });

    app.get('/reg1', (req, res) => {
      res.render('intro');
    });

    app.get('/reg2', (req, res) => {
      let Registeration_status = {
        Rs: ""
      };
      res.render('regPg',{Rs:Registeration_status});
    });

    let success = false;

    app.post('/reg2', uep, (req, res) => {

      let urn = {
      Rs:""
    };

  console.log(req.body.telephone);
  console.log(req.body.tel);


  console.log(req.body.state);
  console.log(req.body.location);

        if(Object.keys(req.body).length != 0){

          let db1 = fs.readFileSync('./public/assets/db.txt','utf8');
          let Odb = JSON.parse(db1);


          let num = Object.keys(Odb).length+1;
          let RegExisted =   function (){

              for(let i=1;i<num;i++){

                      if(num-1 != 0) {
                            if(Odb["cand"+i].surname === req.body.surname && Odb["cand"+i].firstname === req.body.firstname && Odb["cand"+i].age === req.body.age && Odb["cand"+i].email === req.body.email && Odb["cand"+i].tel === req.body.telephone && Odb["cand"+i].dob === req.body.dob && Odb["cand"+i].location === req.body.state){
                              return true;
                            }
                      }

                }

                  return false;
                }


          let cand = "cand"+num;
          Odb[cand] = req.body;
          let text = JSON.stringify(Odb);
         console.log("Existed - ", (RegExisted()));

   if(RegExisted() === false) {

    urn.Rs = "Registration Successful";

           fs.writeFileSync('./public/assets/db.txt',text,err =>{

             if(err){
               console.log('Error writing file',err);
             }
             else{
                console.log("Written succesfully!");
             }


           });

        }
        else if (RegExisted() === true){
           urn.Rs = "Registration Failed! You are only allowed to register ONCE!";

        }


          }
          else {
            urn.Rs = "Registration Failed!";
          }

          res.render('regPg',{Rs:urn});
          //res.sendStatus(204);

    });

    app.get('/login', (req, res) => {
      let k = {
        p:""
      };
      res.render('login',{m:k});
    });

let status = "regular";
    app.post('/login', uep, (req, res) => {
      let db1 = fs.readFileSync('./public/assets/adminPW_db.txt','utf8');
      let Odb = JSON.parse(db1);

      console.log(Odb);
      let bool = false;
      let i;
      for(i=1;i< Object.keys(Odb).length+1;i++){
        console.log(Odb["Admin"+i].username === req.body.username);

        console.log(Odb["Admin"+i].password === req.body.password);


        if(Odb["Admin"+i].username === req.body.username && Odb["Admin"+i].password === req.body.password){

          bool = true;

          break;
       }


     }// for

     if(bool){
       let lgData = {
         username:Odb["Admin"+i].username,
         password:Odb["Admin"+i].password,
         name: Odb["Admin"+i].name,
         gender:Odb["Admin"+i].gender,
         status:Odb["Admin"+i].status
       };

        db1 = fs.readFileSync('./public/assets/db.txt','utf8');
       let Odb2 = JSON.parse(db1);
       let pos;
       console.log(req.body.status);
       if(i=== 1 || Odb["Admin"+i].status === "master") pos = "Master";
       else pos = "Regular";

       let details = {
         n:Object.keys(Odb2).length,
         d:Odb2,
         a:lgData,
         p:pos
       };

       res.render('Admin', {doc:details});
     }
     else{
       let k = {
         p:"Incorrect Username or Password"
       };
       console.log("Incorrect Password");
       res.render('login',{m:k});
     }




    });

    app.get('/deletemember', (req, res) => {
      let db1 = fs.readFileSync('./public/assets/adminPW_db.txt','utf8');
      let Odb = JSON.parse(db1);
      let n = Object.keys(Odb).length;

      let dpd = {
        num:n,
        d: Odb
      };

      res.render('deletemember',{k:dpd});

    });
    app.post('/deletemember',uep, (req, res) => {

      let db1 = fs.readFileSync('./public/assets/adminPW_db.txt','utf8');
      let Odb = JSON.parse(db1);
      let n = Object.keys(Odb).length;

      let {["Admin"+req.body.button]:unused,...newOdb} = Odb;


      console.log(Odb);
      console.log(newOdb);
      n = Object.keys(newOdb).length;
      let arr = Object.values(newOdb);
      let obj = { };
      for(let i=1;i<n+1;i++){
        obj["Admin"+i] = arr[i-1];
      }

      let text = JSON.stringify(obj);


      fs.writeFileSync('./public/assets/adminPW_db.txt',text,err =>{
        if(err){
          console.log('Error writing file',err);
        }
        else{
           console.log("Written succesfully!");
        }
      });

       db1 = fs.readFileSync('./public/assets/adminPW_db.txt','utf8');
       Odb = JSON.parse(db1);
       n = Object.keys(Odb).length;

      let dpd = {
        num:n,
        d: Odb
      };

      res.render('deletemember',{k:dpd});
    });

    app.get('/addmember', (req, res) => {
      let k = {
        d:""
      };
      res.render("addmember",{m:k});
    });

    app.post('/addmember',uep, (req, res) => {

      let db1 = fs.readFileSync('./public/assets/adminPW_db.txt','utf8');
      let Odb = JSON.parse(db1);

      let n = Object.keys(Odb).length+1;

      Odb["Admin"+n] = req.body;
      console.log(">>",req.body);
      let text = JSON.stringify(Odb);

      fs.writeFileSync('./public/assets/adminPW_db.txt',text,err =>{
        if(err){
          console.log('Error writing file',err);
        }
        else{
           console.log("Written succesfully!");
        }
      });


      let k = {
        d:"Member Added"
      };

      res.render("addmember",{m:k});
    });





}

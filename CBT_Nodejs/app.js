let express = require('express');
let ctrl = require('./Controllers/Ctrl');

let app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));

ctrl.router(app);


app.listen(process.env.port||2000, (req, res) => {
  console.log("Port 2000 listening...");
});

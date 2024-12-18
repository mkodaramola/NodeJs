let express = require('express');
let ctrl = require('./controllers/Rctrl');

let app = express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.static('./public'));

ctrl.router(app);


app.listen(process.env.port||3000, (req, res) => {
  console.log("listening at Port 3000...");
});

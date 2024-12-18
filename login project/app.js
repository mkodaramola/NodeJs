var ctrl = require('./controllers/ctrl');
var express = require('express');

var app = express();

//set up view ejs
app.set('view engine', 'ejs');

//set static
app.use(express.static('./public'));

//Connect to DataBase
//ctrl.connectDB();

//start router
ctrl.router(app);


app.listen(process.env.port||4000);
console.log('Server Connected');

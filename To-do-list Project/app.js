var express = require('express');
var tdCtrl = require('./controllers/todoController');
var app = express();


// Set up ejs as template engine
app.set('view engine','ejs');

// set static file
app.use(express.static('./public'));

// Connect to mongoDB
tdCtrl.connectDB();

// Start router
tdCtrl.router(app);

//listen to port
app.listen(process.env.port||4000);
console.log('Connected');

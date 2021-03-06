const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const firebase = require("firebase");

//const googleStorage = require('@google-cloud/storage');
//const Multer = require('multer');


const home = require('./routes/home');
const config = require('./config/keys');

//initialize firebase
firebase.initializeApp(config);

//init app
var app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set the 'ejs' view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//set static folder

app.use('/', home);

//set port to listen
app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), function(){
	console.log('Server started on port '+app.get('port'));
});
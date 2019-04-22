var express = require('express');
var mysql = require('mysql');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();



// support json encoded bodies
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// [view engine] setup
app.set('views', path.join(__dirname, 'views'));
app.set('js', path.join(__dirname, 'js'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// first param is a path - second param is a callback defined above
var index = require('./routes/index'); 
app.use('/', index);

// set public path
var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.route('/requestPSet')
 	.get(function (req, res) {
		res.sendFile(__dirname + '/views/request.html');;
	});


app.listen(3000, function () {
    console.log('Go to http://localhost:3000 or http://127.0.0.1:300 to view');
});

//Change local host to domain on GoDaddy. http://publicip:3000

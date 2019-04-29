var express = require('express')
var path = require('path')
// var cookieParser = require('cookie-parser')
var session = require('express-session')
var bodyParser = require('body-parser')
var mysql = require('mysql')
// var nunjucks = require('nunjucks')

var registerController = require('./register.js');
 


var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'SCS_SKOM'
});

var app = express()

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// app.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/login.html'));
// });

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/login.html')
});

app.get('/register', function(req, res){
    res.sendFile(__dirname + '/public/register.html')
});


app.post('/register', registerController.register);

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		connection.query('SELECT * FROM user WHERE nrp = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/home');
			} else {
				response.send('Incorrect NRP and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter NRP and Password!');
		response.end();
	}
});



app.get('/home', function(request, response) {
	if (request.session.loggedin) {
		response.send('Welcome back, ' + request.session.username + '!');
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(4000, function() {
    console.log('listening on port 4000 !');
});
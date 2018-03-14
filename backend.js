// set up ======================================================================
var express  = require('express');
var app      = express();								// create our app w/ express
var mysql = require('mysql'); 					// mysql
var port  	 = process.env.PORT || 8080; 				// set the port
//var database = require('./config/database'); 			// load the database config

//var morgan = require('morgan'); 		// log requests to the console (express4)
var bodyParser = require('body-parser'); 	// pull information from HTML POST (express4)
//var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration ===============================================================
var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "!B@ng!"
  });// connect to mysql database
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    connection.query("use node", function(err, result) {
        if(err) throw err;
        console.log("Using Database Node!");
    });
  });

app.use(express.static(__dirname + '/public')); 				// set the static files location /public/img will be /img for users
//app.use(morgan('dev')); 										// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
//app.use(methodOverride());

// routes ======================================================================
require('./user.service.js')(app, connection);
require('./registration.service.js')(app, connection);
require('./schedule.service.js')(app, connection);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);

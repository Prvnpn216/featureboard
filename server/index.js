var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash'); // variable name is _

//create the application

var app = express(); //creating the express application

//Adding Middleware nessesary fo the REST API's

// Express is able to install middleware

app.use(bodyParser.urlencoded({encoded: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//app.get("/",function(req,res){
//	res.sendfile("./form.html");
//});

//CORS Support for making the application be available for public usage (Opening up the APIs)
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers','Content-Type');
next();
});

//after this add content to the page
//app.use('/hello', function(req, res, next){
//res.send('Hello World');
//next();
//});

//							or

//app.get("/",function(req,res){
//      res.sendfile("./form.html");
//});

//but we are going to make the application as rest api so we are going to saperate the models in the saperate folder

//connect to MongoDB
mongoose.connect('mongodb://localhost/Featureboard');
mongoose.connection.once('open', function(){

//Load all the models from the models folder

app.models = require('./models/index');

// Load all the routes

var routes = require('./routes');

//Loadash (_) iterates over all the controllers and binds it to the value as found in the routes.js file.
  
_.each(routes, function(controller, route){

console.log(route);

app.use(route, controller(app, route));


}
);

console.log("Connection established Listening on port : 3000");
app.listen(3000);
});

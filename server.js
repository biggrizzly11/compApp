var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/www'));

mongoose.connect('mongodb://localhost/comp');
mongoose.connection.once('open', function() {
	console.log('Connected to mongodb');
});










var port = 3000;
app.listen(port, function() {
	console.log('Listneing on port ' + port);
});
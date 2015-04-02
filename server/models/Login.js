var mongoose = require('mongoose');

//Creating the table schema
var LoginSchema = new mongoose.Schema({
Username:
	{
	type: String,
	required: true 
	},
password:
	{
	type: String,
	required: true
	}
});

//Export the model schema to the model requester
module.exports = mongoose.model('Login',LoginSchema);

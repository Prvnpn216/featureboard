var mongoose = require('mongoose');

//Creating the table schema
var AfterLoginSchema = new mongoose.Schema({
Comment	:
        {
        type: String,
        required: true
        },
Email	:
        {
        type: String,
        required: true
        }
});

//Export the model schema to the model requester
module.exports = mongoose.model('AfterLogin',AfterLoginSchema);


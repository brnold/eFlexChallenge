var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PersonSchema   = new Schema({
	firstName: String,
	lastName: String,
	dob: String
});

module.exports = mongoose.model('person', PersonSchema);
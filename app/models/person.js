var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PersonSchema   = new Schema({
  id: Object,
	firstName: String,
	lastName: String,
	dob: String
});

module.exports = mongoose.model('Person', PersonSchema);

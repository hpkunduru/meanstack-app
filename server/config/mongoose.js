var mongoose = require('mongoose');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error...'));
	db.once('open', function callback() {
		console.log('multivision db opened');
	});

	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		username: String
	});
	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection) {
		if(collection.length === 0) {
			User.create({firstName: 'Hanu', lastName: 'Kunduru', username:'hp'});
			User.create({firstName: 'Swetansu', lastName: 'Mohapatra', username:'su'});
			User.create({firstName: 'Apurv', lastName: 'Gujar', username:'ag'});
		}
	})
};
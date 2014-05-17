var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://jeames:multivision@ds053178.mongolab.com:53178/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://jeames:multivision@ds053178.mongolab.com:53178/multivision',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}
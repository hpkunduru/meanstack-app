var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://hanuprateek:a1b2c3@ds043037.mongolab.com:43037/takezero',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	},
	production: {
		db: 'mongodb://hanuprateek:a1b2c3@ds043037.mongolab.com:43037/takezero',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
}
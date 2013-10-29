var Datastore = require('nedb');

exports.loadDatabase = function() {
	var db = new Datastore({ filename: 'temp/nedb.db', autoload: true });
};

exports.insertDocs = function() {

};
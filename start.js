#!/usr/bin/env node

var program = require('commander');

function list(val) {
	return val.split(',');
}

program
	.version('0.0.1')
	.option('-d, --databases <items>', 'Databases to benchmark', list)
	.parse(process.argv);

databases.forEach(function(db) {
	
});
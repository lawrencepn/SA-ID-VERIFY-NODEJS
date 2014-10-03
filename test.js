//id verify test
var idvarify = require('./program.js');

var id = //add id number here as an int, no spaces or dashes;

idvarify(id, callback);

function callback(err, result){

	console.log(result.valid)
	console.log(result.gender)
}
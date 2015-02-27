// var fs = require('fs');
// var contents = fs.readFileSync(process.argv[2]);
// var splitToS = contents.toString();
// var lines = splitToS.split('\n');
// console.log(lines.length - 1);


var fs = require('fs');
var total = 0;
for(var i = 2; i < process.argv.length; i++){
	var file = fs.readFileSync(process.argv[i]);
	total += file;
}
console.log(total.toString().split('\n').length - 1);
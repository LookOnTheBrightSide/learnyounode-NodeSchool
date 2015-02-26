var fs = require('fs');
var contents = fs.readFileSync(process.argv[2]);
var splitToS = contents.toString();
var lines = splitToS.split('\n');
console.log(lines.length - 1);


var fs = require('fs');
fs.readFile(process.argv[2],'utf8', function(error, data){
	if (error) {
		return console.log('nada');
	}else{
		var contents = fs.readFileSync(process.argv[2]);
		var splitToS = contents.toString();
		var lines = splitToS.split('\n');
			console.log(lines.length - 1);
	}
});


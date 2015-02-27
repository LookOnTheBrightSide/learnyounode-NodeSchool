// var fs = require('fs');
// var path = require('path');
// fs.fs.readdir(path, function(err,list){
// 	if(err){
// 		console.log('Something went wrong!');
// 	}else{
// 		console.log(list);
// 	}
// });

var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

function filter(file)
{
    if (path.extname(file) === ("." + ext)){
            console.log(file);
        }
}
fs.readdir(dir, function(err, list){
    list.forEach(filter);
 });



// var fs = require('fs');
// var path = require('path');
// fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file);
//       });
// });
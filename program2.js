
var proc = process.argv;
var total = 0;        
//var sum = 0;
//console.log(Number(proc.length));
for(var i = 2; i < proc.length; i++){
	total += Number(proc[i]);	
}
console.log(total);





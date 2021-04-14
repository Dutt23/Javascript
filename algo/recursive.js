//  base recursion 
//  1. base case
//  2. Recursive case
//  3. Closer and return when needed. Usually has 2 returns. One base case and normal func return
let counter = 0;
function inception(){
	if(counter > 3)
	return "Done"
	counter++;
	return inception();
}

console.log(inception())
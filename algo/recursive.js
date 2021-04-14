//  base recursion 
//  1. base case
//  2. Recursive case
//  3. Closer and return when needed. Usually has 2 returns. One base case and normal func return
let counter = 0;
function inception() {
	if (counter > 3)
		return "Done"
	counter++;
	return inception();
}




// O(n)
function factorialNormal(num = 1) {
	let sum = 1;
	for (let i = 1; i <= num; i++) {
		sum *= i
	}

	return sum
}

// O(n), Calling the functions same numbeer of times as length of num.
function factorialRecursion(num) {
	let sum = 1;
	// Base case
	if (num == 1)
		return num

	sum *= (num * factorialRecursion(num - 1))

	return sum;
}

function fibonacciItera(num = 1)
{

	let numfirst = 0;
	let numSecond = 1;
	let sum = numfirst + numSecond;
	console.log(numfirst)
	console.log(numSecond)
	for(let i = 1; i < num - 2; i ++){
		console.log(sum)
		numFirst = numSecond;
		numSecond = sum;
		sum = numFirst + numSecond
		
	}
	return sum;
}

// fb(7) = fb(6) + fb(5)
function fiboRecu(num = 0){
	if(num < 2)
	return num;

	return fiboRecu(num -1) + fiboRecu(num -2)
}
// console.log(inception())
// console.log(factorialNormal(5))
// console.log(factorialRecursion(4))
console.log(fiboRecu(8))
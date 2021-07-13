
// No side effects
// input --> output
const array = [1,2,3]

function removeLastItem(array){
  const newArray = [].concat(array)
  newArray.pop()
  return newArray;
}

function multiplyBy2(array){
  return array.map(item => item * 2)
}

// Not pure.
// Affecting something outside
function a(){
  console.log('hi')
}

// Referential transparency

function add(num1, num2){
  return num1 + num2;
}

function mul(num){
  return num*2;
}

// If add function is changed to 7, then it should have any effect on the output.
// mul(add(3, 4))

// Returns a new reference
// Also scope
const num = 8;
mul(num)
console.log(num)


// Idempotence
// Given param return same result
function notGood(num){
  return Math.random(num)
}

notGood(5)

// Imperativr bs Declarative

// Tells how to exactly do things, Imperative
// Tells just do this, how it's done it's on him, Declarative.


// Currying
const multiply = (a, b) => a*b;

const curriedFunction = (a) => (b) => multiply(a, b)
const multiplyBy5 = curriedFunction(5)
console.log(multiplyBy5(3))

const multiplyBy5Bind = multiply.bind(this, 5)
console.log(multiplyBy5Bind(3))

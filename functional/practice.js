
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
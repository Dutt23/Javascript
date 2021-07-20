const { performance, PerformanceObserver } = require('perf_hooks')
// run with opt code node --trace-opt --trace-deopt performance.js | grep executeRand
const numA = 10
const numbB = 5
let iteration = 10000000

const add = (a, b) => a + b

performance.mark('start')

const funcList = [
  (num) => num,
  (num) => num,
  (num) => numA, numbB
]

let index = 0;

function executeRand(num, func){
   addNum()
}

while(iteration--) {
  // const index = iteration%3;
  const letter = 'a';
  const objA = {}
  const objB = {
    one: 'tete'
  }
  executeRand(2, subNum)
  executeRand(objA, subNum)
  executeRand({
    test:'ete'
  }, subNum)
  // executeRand(objA, subNum)
  executeRand(2, 'sisnisnsinsisnisnisn')
  // add(numA, numbB)
}
function subNum(){
  return numA + numbB
}
function addNum(){
  return numA + numbB
}




// add(numA, '5')

iteration = 10000000

while(iteration--) {
  add(numA, numbB)
}

performance.mark('end')

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries()[0]);
  performance.clearMarks();
  observer.disconnect();
});
obs.observe({ entryTypes: ['measure'] });

performance.measure('Add Performance', 'start', 'end')
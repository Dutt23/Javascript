// Debouncing in Javascript
let counter = 0;

const getData = () => {
  // calls an API and gets Data
  console.log("Fetching ", counter++);
}


const debounce = function (fn, d) {
  let timer;
  console.log("ON")
  return function () {
     let context = this
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  }
}


// const debounceFunc = function(){
//   debounce(getData, 300)
// }
const debounceFunc = debounce(getData, 300)
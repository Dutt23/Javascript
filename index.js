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


// Call, apply bind

let person ={
  firstName:"First",
  lastName : "FirstName",
}

let printFullName = function(hometown, state){
  console.log(`My name is ${this.firstName} ${this.lastName} from ${hometown} which is in ${state}`)
}

let person2 ={
  firstName:"Secind",
  lastName : "SecondName",
}
// printFullName.call(person, "Kolkatta", "West Bengal")
// printFullName.call(person2, "Dubai", "United arab emirates")
// printFullName.apply(person2, ["Dubai", "United arab emirates"])


const bindName1 = printFullName.bind(person,"Kolkatta", "West Bengal")

// Polfill, basically is env functionality does not exist provide it.
// Polyfil for bind


Function.prototype.customBind = function(ctx){
  let self = this
  return function(...params){
    self.apply(ctx,[...params])
  }
}

const customBindName = printFullName.customBind(person)
customBindName("KolkattaCustom", "West BengalCustom")
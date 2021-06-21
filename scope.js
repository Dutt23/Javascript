
// function test(){
//     c()
//     function c(){
//         console.log(b)
//     }
// }
// let b = 10;
// test()

// Closures
// var b = "Done"
// function test(){
//     var test = "TESTED";
//     var a = "HEHE";
//     (function(){
//         console.log(b)
//     }())
// }

const val = (param) =>{
    var value = param
    return (param1) => {
        console.log(value)
        return param1 * value
    }
}
const obj = {
    a : "DONE",
    test : function(){
        console.log(this.a);
        (function(){
        }())
    },
    test2 : () => {
        console.log(this.a);
        (function(){
        }())
    }
}

const test = () => {console.log(this)}

var a = "TWO"

obj.test();
obj.test2();
class Person {

    
}
// const done = val(3);
// console.log(done(3))


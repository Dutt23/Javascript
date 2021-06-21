const multiplyBy = (args) => {
 
    var current = args;
    function multiply(test){
    return current *= test;
     }
     
     return multiply;
   }

   var data = [0, 1, 2];
	var funcs = [];
	
	function init() {						// 0
		for (var i = 0; i < 3; i++) {
    				
        let x = data[i];			// 1
 			funcs.push(function() { 	// 2
                return x;
            });			// 3
 		}
	}
	
	function run() {						// 4
		for (var i = 0; i < 3; i++) {
		    console.log(data[i] + ", " +  funcs[i]());   // 5
  		}
	}
	
	init();
	run();

const multiplyBy3 = multiplyBy(3);
const multiplyBy4 = multiplyBy(4);

// console.log(multiplyBy3)
// console.log(multiplyBy3(6));
// console.log(multiplyBy4(6));
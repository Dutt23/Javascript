const { ifError } = require("assert")


function bubbleSort(arr=[]){
	for(let i = 0 ; i < arr.length -1 ; i ++){
		// Largest element at the back so can ignore the last elements
		for(let j = 0 ; j <arr.length -i-1 ; j ++)
		{
			if(arr[j] > arr[j+1])
			{
				let temp = arr[j+1]
				arr[j+1] = arr[j]
				arr[j] = temp;
			}
		}
	}
	console.log(arr)
}
bubbleSort([64, 34, 25, 12, 22, 11, 90, 10])
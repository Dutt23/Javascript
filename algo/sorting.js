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

function selectionSort(arr=[]){
	for(let i = 0 ; i < arr.length; i++){
		let index = i;
		for(let j = i + 1; j <arr.length;j ++){
			if(arr[index] > arr[j])
			{
				index = j;
			} 
		}
		let temp = arr[index]
		arr[index] = arr[i];
		arr[i] = temp;
	}
	console.log(arr);
}
const array = [64, 34, 25, 12, 22, 11, 90, 10]
selectionSort(array)
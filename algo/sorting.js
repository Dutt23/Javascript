const { ifError } = require("assert")


function bubbleSort(arr = []) {
	for (let i = 0; i < arr.length - 1; i++) {
		// Largest element at the back so can ignore the last elements
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j + 1]
				arr[j + 1] = arr[j]
				arr[j] = temp;
			}
		}
	}
	console.log(arr)
}

function selectionSort(arr=[]){
	for(let i = 0 ; i < arr.length ; i ++)
	{
		let min_index = i;
		for(let j = i +1 ; j < arr.length; j ++)
		{
			if(arr[min_index] > arr[j])
			{
				min_index = j;
			}
			
		}
		let temp = arr[i];
			arr[i] = arr[min_index];
			arr[min_index] = temp;
	}
	console.log(arr)
}

// Works best when almost sorted
// Best case O(n)
function insertionSort(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		let value = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > value) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = value
	}
	console.log(arr)
}
const array = [64, 34, 25, 12, 22, 11, 90, 10, 18]
selectionSort(array)
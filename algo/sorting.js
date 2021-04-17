const { ifError } = require("assert");
const { exit } = require("process");


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

function selectionSort(arr = []) {
	for (let i = 0; i < arr.length; i++) {
		let min_index = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min_index] > arr[j]) {
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

function sort(arr, start, end, middle){
	let array1Length = middle - start + 1;
	let array2Length = end - middle;

	let array1 = [];
	let array2 = [];
	for(let i = 0 ; i < array1Length ; ++i)
	array1[i] = arr[start +i];
	for(let j = 0 ; j < array2Length; ++j)
	array2[j] = arr[middle + j + 1]

	let i = 0;
	let j = 0;
	let mergedIndex = start;

	while (i < array1Length && j < array2Length) {
		if(array1[i] <= array2[j])
		{
			arr[mergedIndex] = array1[i];
			i++;
		}
		else {
			arr[mergedIndex] = array2[j];
			j++;
		}
		mergedIndex ++;
	}

	while ( i < array1Length ) {
		arr[mergedIndex] = array1[i];
		i++;
		mergedIndex ++;
	}
	while ( j < array2Length ) {
		arr[mergedIndex] = array2[j];
	   j++;
		mergedIndex ++;
	}
	
}

function mergeSort(arr, start, end){
	if(start < end){
		// Find half of array and add to start
		let middle = Math.floor(start + ((end -start)/ 2))

		mergeSort(arr, start, middle)
		mergeSort(arr, middle + 1, end)

		sort(arr, start, end, middle)
	}
}
const array = [64, 34, 25, 12, 22, 11, 90, 10, 18]
mergeSort(array, 0, array.length - 1)
console.log(array)
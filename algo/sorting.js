


class Job {
	constructor(start, end, profit) {
		this.start = start;
		this.end = end
		this.profit = profit

	}
}


function jobSorting(arr) {
	arr.sort(function (a, b) {
		return a.end - b.end
	})
	const maxProfit = [];
	maxProfit[0] = arr[0].profit;

	for (let i = 1; i < arr.length ; i++) {
		let currentProfit = arr[i].profit
		let nextJobIndex = nextJob(arr, i);
		if (nextJobIndex != -1) {
			currentProfit += maxProfit[nextJobIndex];
		}
		maxProfit[i] = Math.max(currentProfit, maxProfit[i - 1])
	}
	console.log(maxProfit)
}

function nextJob(arr, currentIndex) {
	for (let i = currentIndex - 1; i >= 0; i--) {
		if (arr[currentIndex].start >= arr[i].end)
			return i;
	}
	return -1;
}


jobSorting([
new Job(1, 2, 50),
new Job(3, 5, 20),
new Job(2, 100, 200),
new Job(6, 19, 100)])

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

function sort(arr, start, end, middle) {
	let array1Length = middle - start + 1;
	let array2Length = end - middle;

	let array1 = [];
	let array2 = [];
	for (let i = 0; i < array1Length; ++i)
		array1[i] = arr[start + i];
	for (let j = 0; j < array2Length; ++j)
		array2[j] = arr[middle + j + 1]

	let i = 0;
	let j = 0;
	let mergedIndex = start;

	while (i < array1Length && j < array2Length) {
		if (array1[i] <= array2[j]) {
			arr[mergedIndex] = array1[i];
			i++;
		}
		else {
			arr[mergedIndex] = array2[j];
			j++;
		}
		mergedIndex++;
	}

	while (i < array1Length) {
		arr[mergedIndex] = array1[i];
		i++;
		mergedIndex++;
	}
	while (j < array2Length) {
		arr[mergedIndex] = array2[j];
		j++;
		mergedIndex++;
	}

}

function mergeSort(arr, start, end) {
	if (start < end) {
		// Find half of array and add to start
		let middle = Math.floor(start + ((end - start) / 2))

		mergeSort(arr, start, middle)
		mergeSort(arr, middle + 1, end)

		sort(arr, start, end, middle)
	}
}

function quicksort(arr, start, end) {
	if(start < end) {
		let pivot = partition(arr, start, end)

		quicksort(arr, start, pivot -1 )
		quicksort(arr, pivot + 1, end )
	}
}

function partition(arr, low, high){
	let pivot = arr[high];
	let i = ( low -1);

	for(let j = low; j < high; j++) {
		if(arr[j] <= pivot) {
			i ++;
			swap(arr, i, j);
		}
	}

	swap(arr, i + 1, high)
	return (i + 1)
}

function swap(arr, i, j){
	let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const array = [64, 34, 25, 12, 22, 11, 90, 10, 18]
const array2 = [10, 7, 8, 9, 1, 5];
mergeSort(array, 0, array.length - 1)
console.log(array)
// quicksort(array2, 0, array2.length - 1)
// console.log(array2)

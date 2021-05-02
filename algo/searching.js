function binarySearch(arr, x) {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = Math.floor(low + (high - low) / 2)
		if (arr[mid] == x)
			return mid;

		if (arr[mid] < x)
			low = mid + 1;
		else
			high = mid - 1
	}
	return -1;
}

console.log(binarySearch([2, 3, 4, 10, 40], 3))
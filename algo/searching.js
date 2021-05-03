//If you know a solution is not far from the root of the tree:
// BFS

//If the tree is very deep and solutions are rare, 
// BFS (DFS will take long time. )

//If the tree is very wide:
// DFS (BFS will need too much memory)

//If solutions are frequent but located deep in the tree
// DFS

//determining whether a path exists between two nodes
// DFS

//Finding the shortest path
// BFS

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
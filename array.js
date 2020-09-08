// Lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)

// Build own array

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {}
	}

	// O(1)
	get(index) {
		return this.data[index]
	}

	// O(1)
	push(item) {
		this.data[this.length] = item
		this.length++;
		return this.length
	}

	// O(1)
	pop() {
		const lastItem = this.data[this.length]
		delete this.data[this.length - 1]
		this.length--;
		return lastItem
	}

	// O(n)
	delete(index) {
		const item = this.data[index]
		this.shiftItems(index)
		return item
	}

	shiftItems(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1]
		}
		delete this.data[this.length]
		this.length--;
	}

	// add(index) 
	// 0(n)
	add(index, item) {
		if (index > this.length)
			index = this.length
		for (let i = this.length - 1; i >= index; i--) {
			this.data[i + 1] = this.data[i]
		}
		this.data[index] = item;
		this.length++;
		return this.data
	}
}

// const newArray = new MyArray()
// newArray.push('hi')
// newArray.push('how')
// newArray.push('you')
// console.log(newArray)
// newArray.add(2, 'are')
// console.log(newArray)


// mergeSortedArray([0, 3, 4, 31], [4, 6, 30])
// console.log ( 'z'.charCodeAt(0))
function mergeSortedArray(arr1, arr2) {
	let mergedArray = []
	let array1Item = arr1[0]
	let array2Item = arr2[0]
	let i = 1
	let j = 1;
	while (array1Item || array2Item) {
		if (!array2Item || array1Item < array2Item) {
			mergedArray.push(array1Item)
			array1Item = arr1[i];
			i++
		}
		else {
			mergedArray.push(array2Item)
			array2Item = arr2[j];
			j++;
		}
	}
	console.log(mergedArray)
}


var swap = function (arr, i, j) {

	console.log("i " + i + " j " + j)
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp
	return arr;
}

var moveZeroes = function (nums) {

	let j = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0 && nums[j] == 0)
			nums = swap(nums, i, j)
		if (nums[j] !== 0)
			j += 1
	}
	return nums
	// var count = 0
	// for (let i = 0; i < nums.length ; i++) {
	// 	if (nums[i] != 0)
	// 		nums[count++] = nums[i]
	// }

	// while (count < nums.length)
	// nums[count++]  = 0
	// return nums
};

var checkDuplicates = function (nums) {
	const set = new Set()

	var dup = false;
	for (let value of nums) {

		if (set.has(value)) {
			dup = true;
			break;
		}
		set.add(value)
	}
	return dup;
}

// console.log(checkDuplicates([1,1,1,3,3,4,3,2,4,2]))
// console.log(moveZeroes([0, 1, 0, 3, 12]))
var maxSubArray = function (nums) {

	var max = 0;
	var start = 0;
	var end = 0;
	var max = 0;
	var maxHere = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > maxHere + nums[i]) {
			start = i;
			maxHere = nums[i]
		}
		else
			maxHere += nums[i]

		if (maxHere > max) {
			max = maxHere
			end = i;
		}
	}
	console.log(start)

	console.log(end)
	return max
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
var twoSum = function (nums, target) {

	var map = {}
	var indices = []
	for (value in nums) {
		if (map[nums[value]]) {
			indices.push(map[nums[value]])
			indices.push(value)
			break;
		}
		else {
			map[target - nums[value]] = value
		}
	}
	// nums.forEach((value, index)=>{

	// })
	return indices;
};

// console.log(twoSum([2, 7, 11, 15], 18))

const reverse3 = str => [...str].reverse().join('')
// console.log(reverse3('name is'))
function reverse(str) {
	// check input
	if (!str || str.length < 2 || typeof str !== 'string')
		return 0
	// Replace
	// var string = str.replace(/\s/g, '').split('')
	var string = str
	var reverse = ''
	for (let i = string.length - 1; i >= 0; i--) {
		reverse += string[i]
	}
	// console.log(string.join(''))
	return reverse
}

function reverse2(str) {
	return str.split('').reverse().join('')
}



const array = ['a', 'b', 'c', 'd']

function arrayFunction() {
	array.push('e') // O(1)
	array.pop() // O(1)
	array.unshift('x') //O(n)
	array.splice(2, 0, 'alien') //O(n)
}


// 

const { performance } = require('perf_hooks');
const arr = ['nemo', 'test', 'four']
const arrLarge = new Array(10000).fill('nemo')

function findNemo() {
	const newArray = arrLarge.filter((obj, i, arr) => {
		if (obj === 'nemo')
			return obj
	}
	)
	return newArray
}

// findNemo()

// Function to find if two arrays have anything any item in common.


const array1 = ['a', 'b', 'c', 'd']
const array2 = ['x', 'y', 'z', 'a']

function check(array1, array2) {

	if (!array1 || !array2)
		return false
	const map = array1.reduce((acc, value) => {
		if (!acc[value])
			acc[value] = true
		return acc
	}, {})
	// const map = new Map(array1.map(value => [value, true]))
	var dup = false;
	for (let value of array2) {
		if (map[value]) {
			dup = true;
			break;
		}
	}
	return dup
}

checkBuiltIn = (array1, array2) => array1.some(item => array2.includes(item))

// console.log(checkBuiltIn(array1, array2))

// check if array has a sum which adds up to given

checkSum = (array, sum) => {
	const map = new Map()
	var present = false;
	for (let i = 0; i < array.length; i++) {
		if (map.has(array[i])) {
			present = true;
			break;
		}
		map.set(sum - array[i], true)
	}
	console.log(present)
}

// checkSum([1, 1, 9, 3], 10)
// Right rotate
// 1, 2, 3, 4, 5, 6, 7


// 7, 6, 5, 4, 3, 2, 1 // full reverse
// 7, 6, 5, 1, 2, 3, 4 // 
// 5, 6, 7, 1, 2, 3, 4 

var rightRotate = function (nums, rotation) {
	reverseArray(nums, 0, nums.length - 1)
	reverseArray(nums, 0, rotation - 1)
	reverseArray(nums, rotation, nums.length - 1)
return nums
}

var leftRotate = function( nums , rotation)
{
	reverseArray(nums, 0, rotation - 1)
	reverseArray(nums, rotation  , nums.length - 1)
	reverseArray(nums, 0 , nums.length - 1)
	return nums
}

var reverseArray = function (nums, start, end) {
	while (start < end)
	{
		let temp = nums[start]
		nums[start] = nums[end]
		nums[end] = temp
		start ++
		end --
	}
	return nums
}

console.log(leftRotate([1, 2, 3, 4, 5], 3))
// console.log(rightRotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))

// Left rotate

// Original 1, 2, 3, 4, 5
// 5, 4, 3, 2, 1 Full reverse
// 5, 4, 1, 2, 3 reverse second half rotation -1 , n -1
// 4, 5, 1, 2, 3 // reverse first half 0 , n - roation -1

//  Add contains
// Fast insert
// Fast lookup
// Any keys can be used

// down side
// unordered 
// slow key iteration
class HashTable {
	constructor(size) {
		this.data = new Array(size)
		this.keys = []
	}

	keys() {
		const keys = []
		for (var val of this.data)
			if (val)
				for (let i = 0; i < val.length; i += 2) {
					keys.push(val[i])
				}
		return keys;
	}

	set(key, value) {
		const hash = this._hash(key)
		if (!this.data[hash - 1]) {
			this.data[hash - 1] = [key, value]
		}
		else {
			const values = this.data[hash - 1]
			var match = false;
			for (let i = 0; i < values.length; i += 2) {
				if (values[i] === key) {
					values[i + 1] = value
					match = true;
					break;
				}
			}
			if (match)
				this.data[hash - 1] = values
			else
				this.data[hash - 1] = [...values, key, value]
		}
	}

	get(key) {
		const addr = this._hash(key)
		if (this.data[addr - 1]) {
			for (let i = 0; i < this.data[addr - 1].length; i + 2) {
				if (this.data[addr - 1][i] === key)
					return this.data[addr - 1][i + 1]
			}
		}
		return undefined
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}
		return hash
	}
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 100000)
myHashTable.set('grapes', 999999)
myHashTable.set('apples', 999999)
myHashTable.set('apples', 100000)
myHashTable.set('oranges', 100000)
// console.log(myHashTable.get('grapes'))
// console.log(myHashTable.keys())
// myHashTable.data.forEach(x => console.log(x))

console.log(recurringItem([2, 5, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(recurringItem2([2, 5, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(recurringItem3([2, 5, 5, 1, 2, 3, 5, 1, 2, 4]))

// [2,5,5,2] will return 5
function recurringItem(array = []) {
	if (array.length === 0)
		return undefined
	const myObj = {}
	for (item of array) {
		if (!myObj[item])
			myObj[item] = true
		else return item
	}
}

// [2,5,5,2] will return 2
function recurringItem2(array = []) {
	const obj = new Map()
	for (item of array) {
		if (obj.has(item))
			obj.set(item, obj.get(item) + 1)
		else
			obj.set(item, 1)
	}

	for (key of obj.keys()) {
		if (obj.get(key) > 1)
			return key
	}
}

// [2,5,5,2] will return 2
// Without in built map
function recurringItem3(array = []) {
	const objArray = []
	for (item of array) {
		if(objArray.length === 0)
		objArray.push({
			item,
			count : 1
		})
		else 
		{
			var index = objArray.findIndex(i => i["item"]===item)
			if(index > -1)
			{
				var targetItem = objArray[index];
				targetItem["count"] = targetItem["count"]  + 1
				objArray[index] = targetItem
			}
			else {
				objArray.push({
					item,
					count : 1
				})
			}
			
		}
	}
	for( obj of objArray)
	{
		if(obj["count"] > 1)
		return obj["item"]
	}
}


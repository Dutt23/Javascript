class HashTable {
	constructor(size) {
		this.data = new Array(size)
	}

	set(key, value) {
		const hash = this._hash(key)
		if (!this.data[hash - 1]) {
			this.data[hash - 1] = [key, value]
		}
		else {
			const values = this.data[hash - 1]
			var match = false;
			for (let i = 0; i < values.length; i + 2) {
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
					return this.data[addr- 1][i +1]
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
console.log(myHashTable.get('grapes'))
console.log(myHashTable.data)
class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}


class Queue {
	constructor(value) {
		this.length = 0
		if (!value)
			return
		this.first = new Node(value)
		this.last = this.first
		this.length++;
	}

	peek() {
		if (this.length === 0)
			return null
		return this.first.value
	}

	enqueue(value) {
		if (!value)
			return null
		const newNode = new Node(value)
		if (this.length === 0)
			this.first = newNode
		else
			this.last.next = newNode
		this.last = newNode
		this.length++
		return this;
	}
	dequeue() {
		if (this.length === 0)
			return null
		const node = this.first
		this.first = node.next
		if(this.length ===1) this.last = null
		this.length --;
		return node.value
	}
}

const queue = new Queue(10)
queue.enqueue(12)
queue.enqueue(13)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue)
// console.log(queue.peek())
// queue.dequeue()
// console.log(queue.peek())
// queue.dequeue()
// console.log(queue.peek())
// queue.dequeue()
// console.log(queue)
// function test() {
// 	const arr = [12, 1, 12, 3, 12, 1, 1, 2, 3, 2, 2, 3, 7]
// 	let val = arr[0]
// 	arr.forEach((value) => {
// 		val ^= value
// 	})
// 	console.log(val)
// }
// test()
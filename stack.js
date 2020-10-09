class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {
	constructor(value) {
		this.length = 0
		if (value) {
			this.top = new Node(value)
			this.bottom = this.top
			this.length++
		}
	}
	peek() {
		if (this.top)
			return this.top.value
		return null
	}
	push(value) {
		const newTop = new Node(value)
		if (this.length === 0) {
			this.top = newTop;
			this.bottom = newTop;
		}
		else {
			newTop.next = this.top
			this.top = newTop
		}
		this.length++;
		return this;
	}
	pop() {
		let value = null
		if (this.length <= 0)
			return null
		if (this.length === 1) {
			const temp = this.top
			this.top = null
			this.bottom = null
			value = temp.value
		}
		else {
			const temp = this.top
			this.top = this.top.next
			value = temp.value
		}
		this.length--;
		return value;
	}
}

class ArrayStack {

	constructor(value) {
		this.array = []
		this.length = 0;
		if (value)
		  this.length ++;
			this.array.push(value)
	}

	peek() {
		if (this.array.length > 0)
			return this.array[this.array.length - 1]
		return null
	}
	push(value) {
		if (value)
		{
			this.length ++;
			this.array.push(value)
		}
			
	}
	pop() {
		this.length --;
		return this.array.pop()
	}
}

class QueueStack {
	constructor(value) {
		this.stack1 = new ArrayStack()
		this.stack2 = new ArrayStack()
		this.length = 0;
		if (value) {
			this.stack1.push(value)
		}
	}

	peek() {
		if (this.stack2.length === 0) {
			this.shiftItems()
		}
		return this.stack2.peek();
	}

	enqueue(value) {
		if (!value)
			return null
		this.stack1.push(value)
	}
	shiftItems() {
		if (this.stack2.length === 0) {
			while (this.stack1.length !== 0) {
				this.stack2.push(this.stack1.pop())
			}
		}
	}
	dequeue() {
		if (this.stack2.length === 0) {
			this.shiftItems()
		}
		return this.stack2.pop();
	}
}

const myStack = new QueueStack(10)
myStack.enqueue(12)
myStack.enqueue(13)
myStack.enqueue(14)
myStack.dequeue()
console.log(myStack.peek())

// console.log(myStack.peek())
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack.pop())
// console.log(myStack)
// console.log(myStack.pop())
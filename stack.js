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

const myStack = new Stack()
myStack.push(12)
myStack.push(13)
console.log(myStack)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack)
console.log(myStack.pop())
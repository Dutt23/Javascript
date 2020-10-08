class Node {
	constructor(value) {
		this.value = value
		this.next = null
	}
}

class Stack {

	constructor(value) {
		this.top = new Node(value)
		this.bottom = this.top
		this.length = 1
	}
	peek() {
		if (this.top)
			return this.top.value
		return null
	}
	push(value) {
		const newTop = new Node(value)
		newTop.next = this.top
		this.top = newTop
		this.length++;
	}
	pop() {
		let value = null
		if (this.length <= 0)
			return null
		if (this.length == 1) {
			const temp = this.top
			this.top = null
			this.bottom = null
			value = temp.value
		}
		else{
			const temp = this.top
			this.top = this.top.next
			value = temp.value
		}
		this.length--;
		return value;
	}
}

const myStack = new Stack(10)
myStack.push(12)
myStack.push(13)
console.log(myStack)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack)
console.log(myStack.pop())
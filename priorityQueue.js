class QItem {
	constructor(element, priority = 0) {
		console.assert(element)
		this.element = element;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.items = []
	}

	enqueue(element, priority = 0) {
		const qElement = new QItem(element, priority)
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i].priority > priority) {
				this.items.splice(i, 0, qElement)
				return;
			}
		}
		this.items.push(qElement)
	}


	dequeue() {
		if (!this.items.length || this.items.length === 0)
			return "Underflow"
		return this.items.shift()
	}

	front() {
		if (!this.items.length || this.items.length === 0)
			return "No elements in the queue"
			return this.items[0]
	}

	rear() {
		if (!this.items.length || this.items.length === 0)
			return "No elements in the queue"
			return this.items[this.items.length - 1]
	}
}
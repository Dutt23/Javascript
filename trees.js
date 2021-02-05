// Nodes : 2 ^ Level =
//  0: 2 ^ 0 = 1
// 1: 2 ^ 1 = 2
// 2: 2 ^ 2 = 4
//  2 ^ h - 1
//  log 100 = 2
//  10 ^ 2
// log nodes = h 

class BSTNode {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value
	}
}

class BST {
	constructor() {
		this.root = null;
		this.leftHeight = 0;
		this.rightHeight = 0;
		this.nodes = 0;
	}
	insert(value) {
		const newNode = new BSTNode(value);
		if (this.root === null) {
			this.root = newNode
			return this;
		}

		var node = this.root

		while (true) {
			const nextNode = this.getNextNode(node, value);
			// Incase value already exists don't itert
			if (value === node.value)
				break;
			if (nextNode === null) {
				if (node.value < value) {
					this.rightHeight++;
					node.right = newNode;
				}
				else if (node.value > value) {
					this.leftHeight++;
					node.left = newNode
				}
				this.nodes++;
				break;
			}
			else
				node = this.determineNextNodeValue(node, value)
		}
		return this;
	}

	getTotalNodes = () => this.nodes;

	determineNextNodeValue = (node, value) => node.value < value ? node.right : node.left

	// setNextNode = (node, value) => node.value < value ? node.right = newNode : node.left = newNode

	lookup(value) {
		if (this.root !== null && this.root.value === value)
			return this.root
		var node = this.root;
		var lookupNode = null
		while (true) {
			const nextNode = this.getNextNode(node, value);
			if (nextNode === null)
				break;
			if (nextNode.value === value) {
				lookupNode = nextNode;
				break;
			}
			node = nextNode
		}
		return lookupNode;
	}

	getNextNode = (node, value) => {
		return node.value < value ? node.right : node.left
	}
}

const tree = new BST();
tree.insert(9)
tree.insert(10)
tree.insert(8)
tree.insert(7)
tree.insert(9)
tree.insert(12)
tree.insert(11)
console.log(tree.lookup(90))
// console.log(tree.leftHeight)
// console.log(tree.rightHeight)
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
		const height = 0;
	}
	insert(value) {
		const newNode = new BSTNode(value);
		if (this.root === null) {
			this.root = newNode
			return this;
		}

		var node = this.root

		while (true) {
			const nextNode = this.getNextNode(node, value)
			if (nextNode === null) {
				if (node.value < value)
					node.right = newNode;
				else if (node.value > value)
					node.left = newNode
				break;
			}
			else {
				if (node.value < value)
					node = node.right;
				else if (node.value > value)
					node = node.left;
			}
		}

	}
	lookup(value) {

	}


	getNextNode = (node, value) => {
		return node.value < value ? node.right : node.left
	}
}

const tree = new BST();
tree.insert(9)
tree.insert(10)
tree.insert(8)
tree.insert(6)
tree.insert(12)
tree.insert(20)
tree.insert(19)
tree.insert(11)
console.log(tree)
console.log(tree.root.right.right)
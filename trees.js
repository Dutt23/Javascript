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

	bfsTraverse() {
		let list = [];
		if (!this.root)
			return list;
		let queue = []
		let currentNode = this.root
		queue.push(currentNode)
		while (queue.length > 0) {
			currentNode = queue.shift();
			list.push(currentNode.value)
			if (currentNode.left)
				queue.push(currentNode.left)
			if (currentNode.right)
				queue.push(currentNode.right)
		}
		return list;
	}

	bfsTraverseRecursive(queue, list) {
		if (!queue.length)
			return list;

		let currentNode = queue.shift();
		list.push(currentNode.value)

		if (currentNode.left)
			queue.push(currentNode.left)
		if (currentNode.right)
			queue.push(currentNode.right)

		return this.bfsTraverseRecursive(queue, list)
	}
	insert(value) {
		const newNode = new BSTNode(value);
		if (this.root === null) {
			this.root = newNode
			this.nodes++;
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

	remove(value) {
		if (!this.root)
			return false;
		let currentNode = this.root
		// reference to parent after removal
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left
			}
			else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right
			}
			// match found
			else if (currentNode.value === value) {
				// if right side is null 
				if (currentNode.right === null) {
					if (parentNode === null)
						this.root = currentNode.left
					else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right
						}
						else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right
						}
					}
				}
				// The node after the removal node does not have left node
				else if (currentNode.right.left === null) {
					if (parentNode === null)
						this.root = currentNode.left
					else {
						currentNode.right.left = currentNode.left
						if (currentNode.value < parentNode.value)
							parentNode.left = currentNode.right
						if (currentNode.value > parentNode.value)
							parentNode.right = currentNode.right
					}
				}
				// The right node after the removal node has both nodes
				else {
					var leftMost = currentNode.right.left;
					var leftMostParent = currentNode.right;
					while (leftMost.left !== null) {
						leftMostParent = leftMost;
						leftMost = leftMost.left
					}
					leftMostParent.left = leftMost.right;
					leftMost.left = currentNode.left;
					leftMost.right = currentNode.right;
					if (parentNode === null)
						this.root = leftMost
					else {
						if (currentNode.value > parentNode.value)
							parentNode.right = leftMost
						else if (currentNode.value < parentNode.value)
							parentNode.left = leftMost
					}
				}
				return true
			}
		}
	}

	determineNextNodeValue = (node, value) => node.value < value ? node.right : node.left

	minValue = (root) => {
		var min = root.value;
		while (root.left !== null) {
			min = root.left.value
			root = root.left
		}
		return min
	}

	inOrder = (node) => {
		if (node !== null) {
			this.inOrder(node.left)
			console.log(node.value)
			this.inOrder(node.right)
		}
	}

	preOrder = (node) => {
		if(node !== null){
			console.log(node.value)
			this.preOrder(node.left)
			this.preOrder(node.right)
		}
	}

	postOrder = (node) => {
		if(node !== null){
			this.postOrder(node.left)
			this.postOrder(node.right)
			console.log(node.value)
		}
	}

	getNextNode = (node, value) => {
		return node.value < value ? node.right : node.left
	}
}

const tree = new BST();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
// tree.insert(160)
// tree.insert(190)
// tree.insert(180)
tree.insert(15)
tree.insert(1)
// console.log(tree.remove(170))
console.log("=====")
console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.bfsTraverse())
console.log(tree.bfsTraverseRecursive([tree.root], []))
// console.log(tree.leftHeight)
// console.log(tree.rightHeight)
tree.inOrder(tree.root)
tree.preOrder(tree.root)

// 9
// 4 20
// 1 6 15 170
function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}


function compare(list1, list2) {
	let map = {}
	for(let i = 0 ; i < list2.length; i ++){
		map[list2[i]] = true;
	}

	for(let i = 0 ; i < list1.length; i++)
	{
		if(!map[list1[i]])
		console.log(list1[i]);
	}
}
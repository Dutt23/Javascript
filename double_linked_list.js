class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value
  }
}

class DoublyLinkedList {

  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1;
  }

  append(value){
   const newNode = new Node(value)
   this.tail.next = newNode
   newNode.prev = this.tail
   this.tail = newNode
   this.length ++;
   return this
  }

  prepend(value){
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode;
    this.head = newNode
    this.length ++;
    return this
  }

  insert(index, value) {
    if (index === undefined || value === undefined)
      return this

    if (index >= this.length)
      return this.append(value)

    else if (index === 0)
      return this.prepend(value)

    const newNode = new Node(value)
    let currentNode = this.traverseToIndex(index - 1)
    const temp = currentNode.next
    currentNode.next = newNode
    newNode.next = temp
    newNode.prev = currentNode
    temp.prev = newNode
    this.length++

    return this
  }

  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head
    while (currentNode !== null) {
      if (count === index) {
        return currentNode
      }
      else currentNode = currentNode.next
      count++;

    }

  }

  printFromHead() {
    var currentNode = this.head
    let index = 0;
    while (currentNode !== null) {
      console.log(index +")" +currentNode.value + "-->")
      currentNode = currentNode.next
      index ++;
    }
  }

  printFromTail() {
    var currentNode = this.tail
    let index = 0 
    while (currentNode !== null) {
      console.log(currentNode.value + "-->")
      currentNode = currentNode.prev
      index ++;
    }
  }

}
const dll = new DoublyLinkedList(10)
dll.append(20)
dll.prepend(30)
dll.prepend(40)
dll.append(80)
dll.prepend(90)
dll.insert(20,45)
dll.printFromHead()
console.log("=====")
dll.printFromTail()
// 10 ---> 5 ---> 16

// let myLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 5,
//       next: {
//         value: 16
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class LinkedList {

  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
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
    let currentNode = this.traverseToIndex(index -1)
    const temp = currentNode.next
    currentNode.next = newNode
    newNode.next = temp
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

  print() {
    var currentNode = this.head
    while (currentNode !== null) {
      console.log(currentNode.value + "-->")
      currentNode = currentNode.next
    }
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(40)
myLinkedList.prepend(5)
myLinkedList.prepend(16)
myLinkedList.insert(2, 49)
myLinkedList.append(17)
console.log(myLinkedList.print())
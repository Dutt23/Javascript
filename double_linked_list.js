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

  remove(index)
  {
    if((!index&& index !==0) || index < 0 || index >= this.length)
      return this
    
    this.length--;
    if(index ===0)
    {
      const newHead = this.head.next
      newHead.prev = null
      this.head = newHead
      return this
      
    }
    let currentNode = this.traverseToIndex(index)
    const prev = currentNode.prev
    const next = currentNode.next
    // If condition for handling the last index
    if(prev)
    prev.next = next
    if(next)
    next.prev = prev
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

// 10, 8, 9
reverseddl = (list) =>{
  if(!list)
  return

  let current = list.head
  let temp = null
  while(current){
    temp = current.prev; 
    current.prev = current.next; 
    current.next = temp; 
    current = current.prev;
  }
  const tail = list.tail
  const head = list.head
  list.head = tail
  list.tail = head
  return list
}
const dll = new DoublyLinkedList(10)
dll.append(20)
dll.prepend(30)
dll.prepend(40)
dll.append(80)
dll.prepend(90)
dll.insert(2,45)
dll.printFromHead()
console.log("=====")
dll.remove(200)
// console.log(dll.tail)
reverseddl(dll).printFromHead()
dll.insert(2,21)
dll.printFromHead()
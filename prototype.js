let dragon = {
  name: 'Me',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if(this.fire)
    return `Fire breathing dragon ${this.name}`
  }
}

let lizard ={
  name: 'Two',
  fight() {
    return 5;
  }
}
lizard.__proto__ = dragon
// console.log(dragon.sing())
// console.log(lizard.sing())

// Memory efficient.
// The functions live in one place, no copy is made if common stuff is used
// // Checks if the obj inside the brackets inherits from the parent caller
// console.log(dragon.isPrototypeOf(lizard))

for(let prop in lizard){
  if(lizard.hasOwnProperty(prop))
  console.log(prop)
}

// Object is a function, which creates the object prototype
// Object.proptotype is an object
// Only functions have the prototype property
// const elf = {
//   name: 'Orwell',
//   weapon: 'Bow',
//   attack() {
//     return `Attack with ${this.weapon}`
//   }
// }

// const elf2 = {
//   name: 'Sally',
//   weapon: 'Arrow',
//   attack() {
//     return `Attack with ${this.weapon}`
//   }
// }

// Explicit this binding

const person45 = {
  name:'Shatyaki',
  age: 40,
  hi: function(){
    console.log('hi ' + this.setTimeout)
  }.bind(globalThis)
}

const innerTest = {
  name:'Shatyaki',
  age: 40,
  hi: function(){
    const test = () => {
      console.log(`hi name ${this.name}`)
    }
    test()
  }
}
person45.hi()

// Factory function
const elfFactory = {
  attack() {
    return `Attacking with ${this.weapon}`
  }
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFactory)
  newElf.name = name;
  newElf.weapon = weapon
  return newElf
}

// const elf = createElf('Orwell', 'Bow')
// console.log(elf.attack())


// const elf2 = createElf('Orwell', 'Fire')
// console.log(elf2.attack())

//Construcot function
// Returns the object itself
// Always start with capital letter
function Elf(name, weapon) {
  this.name = name
  this.weapon = weapon
}

Elf.prototype.attack = function(){
  return `Attack with ${this.weapon}`
}
const sam = new Elf('sam', 'bow')
const orwell = new Elf('orwell', 'fire')

const ElfCreator = new Function('name', 'weapon','this.name = name; this.weapon = weapon;')

ElfCreator.prototype.attack = function(){
  return `Attack with ${this.weapon}`
}

// With new keyword, it is attached to the object calling it
// New keyword creates the prototype for us to use
const sarah = new ElfCreator('Sarah', 'Brick')
console.log(sam.attack())
console.log(sarah.attack())

// ES6 class


class Test{
  constructor(name, weapon){
    this.name = name;
    this.weapon = weapon;
  }
  // Shared by all instances of classes.
  // if kept inside the constructor, each time a new one will be creator
  attack(){
    return `Attack with ${this.weapon}`
  }
}

const test = new Test('Shatyaki', 'Dutt')
console.log(test.name)
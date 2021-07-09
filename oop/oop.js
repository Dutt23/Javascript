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
const sarah = new ElfCreator('Sarah', 'Brick')
console.log(sam.attack())
console.log(sarah.attack())
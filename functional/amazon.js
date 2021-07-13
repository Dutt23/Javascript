const user = {
  name: 'Kim',
  active: true,
  cart:[],
  purchases:[]
}

const history = []
const compose = (f,g) => (...args) => f(g(...args))

const purchaseItem = (...fns) => fns.reduce(compose)

const updatedUser = purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItem,
  addItemToCart
)(user, { name :'laptop', price: 300})

console.log(updatedUser)

function addItemToCart(user, item){
  history.push(user)
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, { cart : updatedCart })
}

function applyTaxToItem(user){
  history.push(user)
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item =>{
    return {
      name: item.name,
      price: item.price*taxRate
    }
  })
  return Object.assign({}, user, { cart : updatedCart })
}

function buyItem(user){
  history.push(user)
  return Object.assign({}, user, { purchases : user.cart })
}

function emptyCart(user){
  history.push(user)
  return Object.assign({}, user, { cart : [] })
}

console.log(history)


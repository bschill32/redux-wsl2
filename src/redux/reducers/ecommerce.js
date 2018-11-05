import products from '../../products'

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SHOW_CART = 'SHOW_CART'
const HIDE_CART = 'HIDE_CART'

const initialState = {
  products,
  cart: [],
  showCart: false
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [ ...state.cart, action.payload ] }
    case REMOVE_FROM_CART:
      let index = state.cart.findIndex(item => +item.id === +action.payload)
      let cartCopy = state.cart.slice()
      cartCopy.splice(index, 1)
      return { ...state, cart: cartCopy }
    case SHOW_CART:
      return { ...state, showCart: true }
    case HIDE_CART:
      return { ...state, showCart: false }
    default:
      return state;
  }
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id
  }
}

export function showCart() {
  return {
    type: SHOW_CART
  }
}

export function hideCart() {
  return {
    type: HIDE_CART
  }
}
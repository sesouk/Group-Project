const initialState = {
  cart:  [],
  products: []
  // user: {
  //   name:  '',
  //   email:  '',
  //   address:  '',
  //   phone:  ''
  // }
}

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
const GET_CART = 'GET_CART'
const GET_USER_INFO = 'GET_USER_INFO'
const GET_PRODUCTS = 'GET_PRODUCTS'

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item
  }
}

export const updateQuantity = (quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: quantity
  }
}

export const getCart = (cart) => {
  return {
    type: GET_CART,
    payload: cart
  }
}

export const getUserInfo = (user) => {
  return {
    type: GET_USER_INFO,
    payload: user
  }
}

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products
  }
}

function reducer ( state=initialState, action ){
  switch(action.type){

    case ADD_TO_CART:
      return Object.assign( {}, state, { cart: action.payload })

    case REMOVE_FROM_CART:
      return Object.assign( {}, state, { cart: action.payload })

    case UPDATE_QUANTITY:
      return Object.assign( {}, state, { cart: action.payload })

    case GET_CART:
      return Object.assign( {}, state, { cart: action.payload })

    case GET_USER_INFO:
      return Object.assign( {}, state, { user: action.payload })

    case GET_PRODUCTS:
      return Object.assign( {}, state, { products: action.payload })
    default:
      return state
  }
}


export default reducer

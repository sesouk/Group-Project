const initialState = {
  cart:  [],
  products: [],
  category_items:[]
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
const DECREMENT_QTY = 'DECREMENT_QTY'
const INCREMENT_QTY = 'INCREMENT_QTY'
const CATEGORY_ITEMS = 'CATEGORY_ITEMS'

export const decrementQty = item => {
  return {
    type: DECREMENT_QTY,
    payload: item
  }
}

export const incrementQty = item => {
  return {
    type: INCREMENT_QTY,
    payload: item
  }
}


export const getCategoryProducts =(category_items) =>{
  return {
    type:CATEGORY_ITEMS,
    payload:category_items
  }
}
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
  let newCart = state.cart.slice()
  switch(action.type){
    case ADD_TO_CART:
      let index = newCart.findIndex( e => e.item === action.payload.item.productname )
      if(index !== -1 ){
        newCart[index].qty +=1
        return { ...state, cart: newCart }
      }else{
        return { ...state, cart: [ ...state.cart, {item: action.payload.item.productname, qty: action.payload.qty}]}
      }

    case REMOVE_FROM_CART:
      index = newCart.findIndex( e => e.item === action.payload )
      newCart.splice(index, 1)
      return { ...state, cart: newCart }

    case UPDATE_QUANTITY:
      return Object.assign( {}, state, { cart: action.payload })

    // case GET_CART:
    //   return state.cart

    case GET_USER_INFO:
      return Object.assign( {}, state, { user: action.payload })

    case GET_PRODUCTS:
      return Object.assign( {}, state, { products: action.payload })

      case CATEGORY_ITEMS:
      return {...state, category_items:action.payload}

    case INCREMENT_QTY:
       index = newCart.findIndex( e => e.item === action.payload )
        newCart[index].qty +=1
          return { ...state, cart: newCart }
    case DECREMENT_QTY:
       index = newCart.findIndex( e => e.item === action.payload )
        newCart[index].qty -=1
          return { ...state, cart: newCart }
    default:
      return state
  }
}


export default reducer

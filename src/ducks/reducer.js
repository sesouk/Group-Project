const initialState = {
  cart:  [],
  products: [],
  category_items:[],
  cart_total: 0
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
const GET_USER_INFO = 'GET_USER_INFO'
const GET_PRODUCTS = 'GET_PRODUCTS'
const DECREMENT_QTY = 'DECREMENT_QTY'
const INCREMENT_QTY = 'INCREMENT_QTY'
const CATEGORY_ITEMS = 'CATEGORY_ITEMS'
const CART_TOTAL = 'CART_TOTAL'

export const cartTotal = item => {
  return {
    type: CART_TOTAL,
    payload: item
  }
}
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
      let index = newCart.findIndex( e => e.id === action.payload.id )
      if(index !== -1 ){
        newCart[index].qty +=1
        newCart[index].total = newCart[index].qty*newCart[index].price
        return { ...state, cart: newCart }
      }else{
        return { ...state, cart: [ ...state.cart, {item: action.payload.name, image: action.payload.image, id: action.payload.id, qty: action.payload.qty, price:action.payload.price, total: action.payload.price }]}
      }

    case REMOVE_FROM_CART:
      index = newCart.findIndex( e => e.id === action.payload )
      newCart.splice(index, 1)
        return { ...state, cart: newCart }

    case GET_USER_INFO:
        return Object.assign( {}, state, { user: action.payload })

    case GET_PRODUCTS:
        return Object.assign( {}, state, { products: action.payload })

    case CATEGORY_ITEMS:
        return {...state, category_items:action.payload}

    case INCREMENT_QTY:
      // console.log('-------------- e ', action.payload)
      // console.log('-------------- e.id', action.payload)
      index = newCart.findIndex( e => e.id === action.payload )
      newCart[index].qty +=1
      newCart[index].total = newCart[index].qty*newCart[index].price
        return { ...state, cart: newCart }

    case DECREMENT_QTY:
      index = newCart.findIndex( e => e.id === action.payload )
      newCart[index].qty -=1
      newCart[index].total = newCart[index].qty*newCart[index].price
        return { ...state, cart: newCart }

    case CART_TOTAL:
      console.log('newCart',newCart)
      let total
      newCart[0] ? total = newCart.map( e => e.total ).reduce((a,b) => a+b) : total = state.cart_total
      // console.log('----------totals', total)
      return { ...state, cart: newCart, cart_total: total}

    default:
        return state
  }
}


export default reducer

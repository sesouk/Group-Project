import axios from 'axios'

const initialState = {
  cart:  [],
  products: [],
  category_items:[],
  cart_total: 0,
  user: {
    name:  '',
    email:  '',
    address:  '',
    phone:  ''
  },
  product: [],
  reducedDataItems:[]
 
}

const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const GET_USER_INFO = 'GET_USER_INFO'
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
const GET_OPTIONS = 'GET_OPTIONS'
const DECREMENT_QTY = 'DECREMENT_QTY'
const INCREMENT_QTY = 'INCREMENT_QTY'
const CATEGORY_ITEMS = 'CATEGORY_ITEMS'
const CART_TOTAL = 'CART_TOTAL'
const GET_CART = 'GET_CART'
const FILTER_DATA = 'FILTER_DATA'
export const actions = {

  getCart: () => {
  return (dispatch, getState ) => {
    // console.log(getState());
    return (
      axios.get('/api/user-data')
        .then( response => { dispatch({
          type: GET_CART,
          payload: [response.data.cart, response.data.cart.map( e => e.total).reduce((a, b) => a+b)]
        })})
        .catch( err => console.error( err ))
      )
    }
  },

  remove: (item) => {
    return (dispatch, getState ) => {
      let cart = [ ...getState().cart ]
      let index = cart.findIndex( e => e.id === item)
      cart.splice( index, 1 )
      axios.post('/api/cartToSession', cart)
      return dispatch({
        type: REMOVE_FROM_CART,
        payload: cart
      })
    }
  },

  add: (item) => {
    return (dispatch, getState ) => {
      let cart = [ ...getState().cart ]
      let index = cart.findIndex( e => e.id === item.id )
      // console.log('the index value is', index)
      if(index !== -1 ){
        cart[index].qty+=1
        cart[index].total = cart[index].qty*cart[index].price
      } else {
        cart.push(item)
        // console.log('response', cart)
      }
      axios.post('/api/cartToSession', cart)
      return dispatch({
        type: ADD_TO_CART,
        payload: cart
      })
    }
  },

  plusOne: (item) => {
    return ( dispatch, getState ) => {
      let cart = [ ...getState().cart ]
      // console.log('response', cart)
      // console.log('you sent me', item)
      let index = cart.findIndex( e => e.id === item)
        cart[index].qty +=1
        cart[index].total = cart[index].qty*cart[index].price

        axios.post('/api/cartToSession', cart )
        return dispatch({
          type: INCREMENT_QTY,
          payload: cart
        })
    }
  },

  minusOne: (item) => {
    return ( dispatch, getState ) => {
      let cart = [ ...getState().cart ]
      let index = cart.findIndex( e => e.id === item)
        cart[index].qty -=1
        cart[index].total = cart[index].qty*cart[index].price

      axios.post('/api/cartToSession', cart )
      return dispatch({
        type: DECREMENT_QTY,
        payload: cart
      })
    }
  }, 

  cartTotal: () => {
    return ( dispatch, getState ) => {
      let cart = [ ...getState().cart ]
      let total = cart[0] ?  cart.map( e => e.total).reduce( (a, b) => a + b) : 0
      // console.log(total)
      return dispatch({
        type: CART_TOTAL,
        payload: total
      })
    }
  }
}

export const reducedData =(reducedData) =>{

  return {
    type:FILTER_DATA,
    payload:reducedData
  }
}

export const getCategoryProducts =(category_items) =>{
  return {
    type:CATEGORY_ITEMS,
    payload:category_items
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
export const getOptions = (options) => {
  return {
    type: GET_OPTIONS,
    payload: options
  }
}

export const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    payload: product
  }
}

function reducer ( state=initialState , action ){
  let index
  let total = 0
  switch(action.type){

    case ADD_TO_CART: 
      return { ...state, cart: action.payload }
      

    case REMOVE_FROM_CART:
      return { ...state, cart: action.payload }

    case GET_USER_INFO:
      return Object.assign( {}, state, { user: action.payload })

    case GET_PRODUCTS:
      return Object.assign( {}, state, { products: action.payload })

    case GET_PRODUCT:
      return { ...state, product: action.payload }
        
    case CATEGORY_ITEMS:
      return { ...state, category_items:action.payload}

        case FILTER_DATA:
        return {...state, reducedDataItems:action.payload}

    // case INCREMENT_QTY:
    //   // console.log('-------------- e ', action.payload)
    //   // console.log('-------------- e.id', action.payload)
    //   index = newCart.findIndex( e => e.id === action.payload )
    //   newCart[index].qty +=1
    //   newCart[index].total = newCart[index].qty*newCart[index].price
    //     return { ...state, cart: newCart, cart_total: parseInt(total) }
    case INCREMENT_QTY:
      return { ...state, cart: action.payload }

    case DECREMENT_QTY:
      return { ...state, cart: action.payload }

    case CART_TOTAL:
      // console.log('newCart',newCart)
      return { ...state, cart_total: action.payload}
    
    case GET_CART:
      return { ...state, cart: action.payload[0], cart_total: action.payload[1]}

    default:
      return state
  }
}


export default reducer

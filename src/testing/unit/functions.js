

module.exports = {

  getCart: function(initialState){
    return initialState.initialState.cart
  },

  cartTotal: function(initialState){
    return initialState.initialState.cart_total
  }
}
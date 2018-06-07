const products = require('./shopTestData')

module.exports = {
  cart: [],

  addToCart: function(products){
    this.cart.push(products)
  }
}
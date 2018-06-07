const shopTest = require('../components/shopTest')

const products = require('../components/shopTestData')

describe('Shop properties', function() {
  test('Filtered data should be empty', function() {
      expect(Array.isArray(shopTest.cart)).toEqual(true)
  })
})

describe('Cart Methods:', function() {
  afterEach(function() {
      shopTest.cart = []
  })
  test('addToCart() should add a product to cart.', function() {
      shopTest.addToCart(products[0])
      shopTest.addToCart(products[1])

      expect(shopTest.cart.length).toEqual(2)
      expect(shopTest.cart[0]).toEqual(products[0])
      expect(shopTest.cart[1]).toEqual(products[1])
  })
})
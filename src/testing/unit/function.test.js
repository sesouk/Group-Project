/*
* @jest-environment node
*/

const functions = require('./functions')
const initialState = require('./function.data.js')

// const {cart} = initialState

test('getCart() should return empty array.', () => {
  expect( functions.getCart(initialState)).toEqual([])
})

test('cartTotal() should return 0', () => {
  expect( functions.cartTotal(initialState)).toEqual(0)
})

import React, { Component } from 'react'
import axios from 'axios'
import { getProducts, actions } from '../ducks/reducer'
import { connect } from 'react-redux'

class Cart extends Component {

  componentDidMount(){
    this.props.getCart()
    this.props.total()
  }
  
  render() {
      // console.log(this.props)
      // console.log('============= current cart', this.props.cart)
      // console.log('------------------- CART TOTAL ', this.props.total)
      const total = this.props.total
      const cart = this.props.cart ? this.props.cart.map( (e,i) => {
        // console.log('--------------- items ', 'qty: ', e.qty)
        return <div key={i}>
              <div>{e.item}
              <img src={e.image} alt={e.shortdesc}/> 
                <button onClick={() =>e.qty-1 === 0 ? this.props.removeFromCart(e.id) && this.props.total() : this.props.minusOne(e) && this.props.total()}>-</button>
                {e.qty}
                <button onClick={() => this.props.plusOne(e) && this.props.total()}>+</button>
              </div>  

              <button onClick={() => this.props.removeFromCart(e.id) && this.props.total()}>Remove this Item</button>
          </div>
          
      }) : 'add something to your cart!'
        return (
          <div>
            <h1>Cart</h1>
            {cart}
            <div>SubTotal: {total}</div>
          </div>
        )
    }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.cart_total
  }
}

const mapDispatchToProps = {
  getProducts,
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
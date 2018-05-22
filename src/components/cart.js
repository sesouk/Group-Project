import React, { Component } from 'react'
import axios from 'axios'
import { getProducts, getCart, decrementQty, incrementQty, removeFromCart} from '../ducks/reducer'
import { connect } from 'react-redux'

class Cart extends Component {
  constructor(props){
    super(props)
  }

  
    render() {
      console.log('============= current cart', this.props.cart)
      const cart = this.props.cart.length > 0 ? this.props.cart.map( (e,i) => {
        // console.log(e)
        return <div key={i}>
              <div>{e.item} 
                <button onClick={() =>e.qty-1 == 0 ? this.props.removeFromCart(e.item) : this.props.decrementQty(e.item)}>-</button>{e.qty}
                <button onClick={() => this.props.incrementQty(e.item)}>+</button>
              </div>  
          </div>
          
      }) : 'add something to your cart!'
        return (
          <div>
            <h1>Cart</h1>
            {cart}
          </div>
        )
    }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, {getProducts, getCart, decrementQty, incrementQty, removeFromCart })(Cart)
import React, { Component } from 'react'
import axios from 'axios'
import { getProducts, decrementQty, incrementQty, removeFromCart, cartTotal} from '../ducks/reducer'
import { connect } from 'react-redux'

class Cart extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.cartTotal()
  }

  
    render() {
      console.log('============= current cart', this.props.cart)
      // console.log('-------------------', this.props.total)
      const cart = this.props.cart ? this.props.cart.map( (e,i) => {
        console.log('--------------- items ', 'qty: ', e.qty)
        return <div key={i}>
              <div>{e.item}
              <img src={e.image} alt={e.shortdesc}/> 
                <button onClick={() =>e.qty-1 == 0 ? this.props.removeFromCart(e.id) && this.props.cartTotal() : this.props.decrementQty(e.id) && this.props.cartTotal()}>-</button>{e.qty}
                <button onClick={() => this.props.incrementQty(e.id) && this.props.cartTotal()}>+</button>
              </div>  

              <button onClick={() => this.props.removeFromCart(e.id) && this.props.cartTotal()}>Remove this Item</button>
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
    cart: state.cart,
    total: state.cart_total
  }
}

export default connect(mapStateToProps, {getProducts, decrementQty, incrementQty, removeFromCart, cartTotal })(Cart)
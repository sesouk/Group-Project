import React, { Component } from 'react'
import axios from 'axios'
import { getProducts, actions } from '../ducks/reducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Cart extends Component {

  componentDidMount(){
    this.props.getCart()
  }
  
  render() {
      // console.log(this.props)
      console.log('============= current cart', this.props.cart)
      // console.log('------------------- CART TOTAL ', this.props.total)
      const total = this.props.total
      const cart = this.props.cart[0] ? this.props.cart.map( (e,i) => {
        // console.log('--------------- items ', 'qty: ', e.qty)
        return <div key={i}>
              <div>{e.name}
              <img src={e.image} alt={e.name}/> 
                <button onClick={() =>e.qty-1 === 0 ? this.props.remove(e.id) && this.props.cartTotal() : this.props.minusOne(e.id) && this.props.cartTotal()}>-</button>
                {e.qty}
                <button onClick={() => this.props.plusOne(e.id) && this.props.cartTotal()}>+</button>
              </div>  

              <button onClick={() => this.props.remove(e.id) && this.props.cartTotal()}>Remove this Item</button>
          </div>
          
      }) : 'add something to your cart!'
        return (
          <div>
            <h1>Cart</h1>
            {cart}
            <div> <b>SubTotal: {total} </b></div>

            <br />
                 


   
    <Link to="/checkout">     <Button variant="raised" color="primary"> Check Out </Button></Link>
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
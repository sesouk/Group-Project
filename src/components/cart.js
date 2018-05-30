import React, { Component } from 'react'
import axios from 'axios'
import { getProducts, actions } from '../ducks/reducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Cart extends Component {

  constructor(){
    super()


    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.delete = this.delete.bind(this)
  }
  componentDidMount(){
    this.props.getCart()
  }
  
  increment(item){
    this.props.plusOne(item)
    this.props.cartTotal()
  }

  decrement(item){
    
    this.props.minusOne(item)
    this.props.cartTotal()
  }

  delete(item){
    this.props.remove(item)
    this.props.cartTotal()
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
                <button onClick={() => e.qty-1 === 0 ? this.delete(e.id) : this.decrement(e.id)}>-</button>
                {e.qty}
                <button onClick={() => this.increment(e.id)}>+</button>
              </div>  

              <button onClick={() => this.delete(e.id)}>Remove this Item</button>
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
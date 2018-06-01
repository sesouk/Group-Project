import React, { Component } from 'react'
import { getProducts, actions } from '../ducks/reducer'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FaTrash from "react-icons/lib/fa/trash";
import './../Styling/CartStyle.css'


class Cart extends Component {

  constructor(){
    super()


    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.delete = this.delete.bind(this)
  }
  componentDidMount(){
    this.props.cart[0] ? null : this.props.getCart()
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
    // console.log(window.location.pathname)
    // console.log(this.props.total);
    const total = this.props.total
    // console.log(total)
      const cart = this.props.cart[0] ? this.props.cart.map( (e,i) => {
        return <div key={i}>
        <div className="cartitem">
        <div className ="cartbody">
      
        <img src={e.image} alt={e.name}/> 
              <p>{e.name} </p>
            
              <p>Color: {e.color} </p>
              <p>Size: {e.size} </p>
            
              </div>
            
              <div className ="cartbody">
              <div>
                <button onClick={() => e.qty-1 === 0 ? this.delete(e.id) : this.decrement(e.id)}>-</button>
                {e.qty}
                <button onClick={() => this.increment(e.id)}>+</button>
                </div>
                <br />

              <span onClick={() => this.delete(e.id)}><FaTrash /> </span>
              <p><b> Total: {e.total.toFixed(2)}</b> </p>
          </div>
          </div>
          </div>
          
      }) : 'add something to your cart!'
        return (
          <div>
            {/* <h1>Cart</h1> */}
            {cart}
            <div> <b>Order SubTotal: {this.props.cart[0] ? total.toFixed(2):0} </b></div>

            <br />
                 


    
    {window.location.pathname==='/checkout' ? null :  <Link to="/checkout">     <Button variant="raised" color="primary"> Check Out </Button></Link> 
      }</div>
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
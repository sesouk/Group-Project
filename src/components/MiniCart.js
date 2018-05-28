import React, { Component } from 'react'
import axios from 'axios'
import { getProducts, cartTotal, actions} from '../ducks/reducer'
import { connect } from 'react-redux'

import StripeCheckout from './StripeCheckout'
import FaTrash from "react-icons/lib/fa/trash";
import './../Styling/minicartStyle.css'

class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      cart: this.props.cart,
      total: this.props.total
    }
  }
  componentDidMount(){
    this.props.cartTotal()
  }

  
    render() {
      const total = this.props.total
      const cart = this.props.cart.map( (e,i) => {
        return <div className="minicart_flex" key={i}>
        <div className="minicart_wrapper">
              <div>{e.item} </div>
             <div> <img src={e.image} alt={e.shortdesc} width="80px"/> </div>
             <div>Quanity{e.qty} </div>
             </div>io9
             <div>Item Total {e.total} </div>
             <span className="Message__delete" onClick={() => this.props.removeFromCart(e.id) && this.props.cartTotal()}>  <FaTrash /> </span>

                  {/* <Button variant="raised" color="primary" onClick={() => this.props.removeFromCart(e.id) && this.props.cartTotal()}>Remove this Item </Button> */}
          </div>
          
      }) 
        return (
          <div className="minicart_summary">
            <h3> Cart Summary </h3>
            {cart}
            <div>SubTotal:{total}</div>
            <div>
                            <span>Shipping(Flat Rate):</span>
                            <div>$5.00</div>
                        </div>
                        <div>
                            <span>Tax:</span>
                            <div>${(total * .06).toFixed(2)}</div>
                        </div>
                        <div className="minicart_ordersubtotals"> 
                            <span>Order Total:</span>
                            <div>${((total * 1.06) + 5).toFixed(2)} </div>
                        </div>
                       
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
  cartTotal,
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
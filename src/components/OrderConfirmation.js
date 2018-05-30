import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class OrderConfirmation extends Component {
    render() {
    
        return (
            <div>
                <h1> Thank you for your order!!</h1>
            

              
                <h3> Your order number is : {this.props.match.params.orderNumber} </h3>

                <div>
                <Link to="/">Continue Shopping</Link>
                    </div>

                </div>

            
        );
    }
}
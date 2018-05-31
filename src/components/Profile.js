import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './../Styling/ProfileStyle.css'

export default class Profile extends Component {
    constructor()
    {
        super();
        this.state={
            orders:[]
        }
        this.getOrdersByUserID = this.getOrdersByUserID.bind(this)
    }
  getOrdersByUserID(){
    console.log("inside getuserid")
    axios.get('/api/orders').then(response=>{
      console.log("inside profile data", response.data)
      this.setState({orders:response.data})
    })
  }

    render() {
        const orderList = (
            <table>
              <tr>
                <th>Order ID</th>
                <th>Order Amount</th>
                <th>Order Shipping address</th>
                <th>Order Date</th>
              
              </tr>
              {this.state.orders.map((order, i) => {
                return (
                  <tr>
                    <td>{order.orderid}</td>
                    <td>${order.orderamount}</td>
                    <td>{order.ordershipaddress}</td>
                    <td>{order.orderdate}</td>
                  </tr>
                );
              })}
            </table>
          );
        return (
            <div>
                <Button variant="raised" color="primary"> Edit your Profile </Button>
                <Button variant="raised" color="primary" onClick={this.getOrdersByUserID}> See all the orders</Button>

<div>
  <h1>Order Details </h1>
   {orderList}
  </div>
                </div>
        );
    }
}
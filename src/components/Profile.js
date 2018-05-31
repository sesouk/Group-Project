import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './../Styling/ProfileStyle.css'
import UserInfo from './UserInfo'

export default class Profile extends Component {
    constructor()
    {
        super();
        this.state={
            orders:[],
            username:'',
            display:''
        }
        this.getOrdersByUserID = this.getOrdersByUserID.bind(this)
        this.updateStateProfile=this.updateStateProfile.bind(this)
        this.updateStateOrder = this.updateStateOrder.bind(this)
    }
  getOrdersByUserID(){
    console.log("inside getuserid")
    axios.get('/api/orders').then(response=>{
      console.log("inside profile data", response.data)
      this.setState({orders:response.data})
    })
  }
  updateStateProfile() {
    this.setState({ display: "profile" });
  }
  updateStateOrder() {
    this.setState({ display: "order" });
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
       
            <div className="profile-header"> 
               {console.log("value of display", this.state.display)}
               <h1>Welcome valued customer </h1>
               <br />
                <div className="profile-container">
                    <div onClick={this.updateStateProfile}>
                        <Button variant="raised" color="primary" > Edit your Profile </Button>
                     </div>
                     <div onClick={this.updateStateOrder}>
                        <Button variant="raised" color="primary" onClick={this.getOrdersByUserID}> See all the orders</Button>
                   </div>
</div>
<div>
  {this.state.display==='profile'?
<UserInfo />
: null
        }
<div>
{this.state.display==='order'?
<div>
<h1>Order Details </h1>
{orderList}
</div>
: null
        }


</div>

 
  
  </div>
                </div>
                
        );
    }
}
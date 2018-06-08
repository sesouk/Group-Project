import React, { Component } from 'react';
import axios from 'axios';
import { Table, Badge, Menu, Dropdown, Icon } from 'antd';
import {arrayToArrayofObject, myNewFunction} from '../utils/function'

export default class AdminOrders extends Component {
  constructor(){
    super()
        this.state={
            orders:[]
        }

    
}
componentDidMount(){
    axios.get('/api/allOrders').then( response => {
        // console.log("response on admin orders page",response.data)
        this.setState({orders:response.data})
      })
      .catch( err => {
        console.log( err )
      })
}

  

  render() {
    console.log("valuse from backend", this.state.orders)
    const orderArrayOfProductObj= arrayToArrayofObject(this.state.orders)
    console.log(orderArrayOfProductObj)  

    let newArray = Object.keys(orderArrayOfProductObj).map(key => {
            console.log(key, orderArrayOfProductObj[key].orderamount,  orderArrayOfProductObj[key].orderDate, orderArrayOfProductObj[key].products)
    })

    return (
      <div>
    
<h1> All orders </h1>
        </div>

      
    );
  }
}


import React, { Component } from 'react';
import axios from 'axios';
import { Table, Badge, Menu, Dropdown, Icon } from 'antd';
import {arrayToArrayofObject, arrayObject} from '../utils/function'
const menu = (
    <Menu>
      <Menu.Item>
        Action 1
      </Menu.Item>
      <Menu.Item>
        Action 2
      </Menu.Item>
    </Menu>
  );

const columns = [{
    title: 'OrderID',
    dataIndex: 'orderid',
    key:'orderid'
    
  }, {
    title: 'Order amount',
    dataIndex: 'orderamount',
    key:'orderamount'
  }, {
    title: 'Placed by',
    dataIndex: 'username',
    key:'username'
  },
  {
    title: 'Order Date',
    dataIndex: 'orderDate',
    key:'orderDate'
  }];

  const expandedRowRender=()=>{

    const columns = [
        { title: 'Product ID', dataIndex: 'date', key: 'date' },
        { title: 'Product name', dataIndex: 'name', key: 'name' },
        { title: 'Product image', key: 'image', key:'image'},
        { title: 'Product Price', dataIndex: 'price', key: 'price' },
        { title: 'Product Quantity', dataIndex: 'quantity', key: 'quantity' },
     
      ];
  }
  
export default class AdminOrders extends Component {
    constructor(){
        super()
            this.state={
                orders:[]
            }
        
    }
    componentDidMount(){
        axios.get('/api/allOrders').then( response => {
            console.log("response on admin orders page",response.data)
            this.setState({orders:response.data})
          })
          .catch( err => {
            console.log( err )
          })
    }

    render() {
        //Sending array of orders to arrayToArrayofObject function in utils/function.js to convert it into array of objects for showing all products of order
        const orderArrayOfProductObj = arrayToArrayofObject(this.state.orders)
        console.log(orderArrayOfProductObj)
      
        // const orderList=(orderArrayOfProductObj)=>{
        //     for(let key in orderArrayOfProductObj){
        //      const valueList=orderArrayOfProductObj[key]
        //      console.log("inside orderList",valueList)
             
        //     }

        // }
    
        return (
            <div>


                
                <h1> Inside orders </h1>
                {/* {arrayObjResult} */}
                <Table
                //  dataSource={orderList}



                  columns={columns} 
                />
                </div>

            
        );
    }
}


import React, { Component } from 'react';

export default class ItemList extends Component {
    constructor(props){
        super();
        this.state ={
            activeTabValue:''
        }
    }
    render() {
        const {filteredItem} = this.props.children
        const products = filteredItem.map( (e, i) => {
            console.log('----------e', e);

            return <div key={i} >
                    <h1>{e.productname}</h1>
                    <h2>{e.productshortdesc} </h2>
                    <img src ={e.productimage}  />
                    <h3> {e.productcartdesc} </h3>
                    <span>{e.productprice}</span>
    
                   </div>
          })
          // { this.props.cart > 0 ? console.log( '---------productid', this.props.cart[0].productid : null) }
            return (
              <div>
                <h1>Stop N Shop</h1>
                {products}
              </div>
    
            )
        }
    }
    
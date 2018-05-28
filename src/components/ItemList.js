import React, { Component } from 'react';
import { getProducts, actions } from '../ducks/reducer'
import { connect } from 'react-redux'

 class ItemList extends Component {
    
    render() {
        console.log(this.props.children)
        // {console.log("values of chilred", children)}
        return (
            <div>
               
             {this.props.children.map((e, i) => {
                    return <div key={i} >
                        <h1>{e.productname}</h1>
                <h2>{e.productshortdesc} </h2>
                <img src ={e.productimage}  />
                <h3> {e.productcartdesc} </h3>
                <span>{e.productprice}</span>
                <span>{e.productstock <=0 ? ' out-of-stock' : e.productstock >0 && e.productstock <= 10 ? ' limited-stock' : ' in-stock'}</span>
                <button onClick={() => this.props.addToCart({ name: e.productname, id:e.productid, qty: 1, image: e.productimage, price: e.productprice })}>Buy it!</button>

         
              </div>
                 }) 
            } 
                </div>
    //         
        );
    }
}
const mapStateToProps = state => {
    return {
      products: state.products,
      cart: state.cart
    }
  }

const mapDispatchToProps = {
  getProducts,
  ...actions
}
  export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
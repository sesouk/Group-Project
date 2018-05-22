import React, { Component } from 'react';
import { getProducts, addToCart } from '../ducks/reducer'
import { connect } from 'react-redux'

 class ItemList extends Component {
    
    render() {
        // const children = (this.props.children)
        // {console.log("values of chilred", children)}
        return (
            <div>
               
             {this.props.children[0].map((e, i) => {
                    return <div key={i} >
                        <h1>{e.productname}</h1>
                <h2>{e.productshortdesc} </h2>
                <img src ={e.productimage}  />
                <h3> {e.productcartdesc} </h3>
                <span>{e.productprice}</span>
                <span>{e.productstock <=0 ? ' out-of-stock' : e.productstock >0 && e.productstock <= 10 ? ' limited-stock' : ' in-stock'}</span>
                <button onClick={this.props.cart.indexOf(e) > -1 ? null : () => this.props.addToCart({item: e, qty: 1})}>Buy it!</button>

         
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
  export default connect(mapStateToProps, {getProducts, addToCart})(ItemList)
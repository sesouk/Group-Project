import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getProducts, addToCart } from '../ducks/reducer'

class Shop extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(props){
    axios.get('/api/shop')
      .then( products => {
        this.props.getProducts(products.data)
        // console.log('--------products', this.props.products )
      })
      .catch( err => {
        console.log( err )
      })
  }

    render() {
      // console.log('---------products',this.props.products)
      // console.log('---------productid', this.props.cart)
      // console.log('---------cart.productID', this.props.cart.findIndex(e => e.id))
      // console.log('---------this.props.cart-------', this.props.cart)
      const products = this.props.products ? this.props.products.map( (e, i) => {
        // console.log('----------e', e);
        // console.log('----------this.props.cart', this.props.cart);
        return <div key={i} >
                <h1>{e.productname}</h1>
                <h2>{e.productshortdesc} </h2>
                <img src ={e.productimage}  />
                <h3> {e.productcartdesc} </h3>
                <span>{e.productprice}</span>

                <span>{e.productstock <=0 ? ' out-of-stock' : e.productstock >0 && e.productstock <= 10 ? ' limited-stock' : ' in-stock'}</span>
                <button onClick={() => this.props.addToCart({ name: e.productname, id:e.productid, qty: 1, image: e.productimage, price: e.productprice })}>Buy it!</button>
               </div>
      }) : 'no products to display'
      // { this.props.cart > 0 ? console.log( '---------productid', this.props.cart[0].productid : null) }
        return (
          <div>
            <h1>Stop N Shop</h1>
            {products}
          </div>

        )
    }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  }
}
export default connect(mapStateToProps, {getProducts, addToCart})(Shop)

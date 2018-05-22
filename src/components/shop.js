import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getProducts, addToCart } from '../ducks/reducer'
import '../Styling/shop.css'

class Shop extends Component {
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
<<<<<<< HEAD
      console.log('---------products',this.props.products)
      // console.log('---------productid', this.props.cart[0])
=======
      // console.log('---------products',this.props.products)
      // console.log('---------productid', this.props.cart)
      // console.log('---------cart.productID', this.props.cart.findIndex(e => e.id))
      // console.log('---------this.props.cart-------', this.props.cart)
>>>>>>> 310d3b542a5dbb838e8560e9e8fcce20adf5f9c0
      const products = this.props.products.map( (e, i) => {
        // console.log('----------e', e);
        // console.log('----------this.props.cart', this.props.cart);
        return <div key={i} >
                <h1>{e.productname}</h1>
                <h2>{e.productshortdesc} </h2>
                <img src ={e.productimage} alt={e.productname}  />
                <h3> {e.productcartdesc} </h3>
                <span>{e.productprice}</span>

                <p>{e.productstock <=0 ? 'out-of-stock' : e.productstock >0 && e.productstock <= 10 ? 'limited-stock' : 'in-stock'}</p>
                <button onClick={() => this.props.addToCart({ name: e.productname, id:e.productid, qty: 1, image: e.productimage, price: e.productprice })}>Buy it!</button>
               </div>
      })
      // { this.props.cart > 0 ? console.log( '---------productid', this.props.cart[0].productid : null) }
        return (
          <div>
            <h1>Stop N Shop</h1>
            <div className='container'>
            {products}
            </div>
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

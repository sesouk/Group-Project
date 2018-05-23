import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getProducts, addToCart } from '../ducks/reducer'
import '../Styling/shop.css'
// import TabsData from './TabsData'

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
      console.log('---------products',this.props.products)
      const products = this.props.products ? this.props.products.map( (e, i) => {
        return <div key={i} className='item'>
<div>
                <h1>{e.productname}</h1>
                <h2>{e.productshortdesc} </h2>
                <img src ={e.productimage} alt={e.productname}  />
                <h3> {e.productcartdesc} </h3>
                <span>{e.productprice}</span>

                <p>{e.productstock <=0 ? 'out-of-stock' : e.productstock >0 && e.productstock <= 10 ? 'limited-stock' : 'in-stock'}</p>
                <button onClick={() => this.props.addToCart({ name: e.productname, id:e.productid, qty: 1, image: e.productimage, price: e.productprice })}>Buy it!</button>
</div>
               </div>
      }): 'nothing to display'
      // { this.props.cart > 0 ? console.log( '---------productid', this.props.cart[0].productid : null) }
        return (
          <div>
            {/* <TabsData/> */}
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

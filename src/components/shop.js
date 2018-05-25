import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getProducts, getProduct, actions } from '../ducks/reducer'
import '../Styling/shop.css'
// import TabsData from './TabsData'

class Shop extends Component {
  componentDidMount(props){
    axios.get('/api/shop')
      .then( products => {
        // console.log(products.data)
        this.props.getProducts(products.data)
        // console.log('--------products', this.props.products )
      })
      .catch( err => {
        console.log( err )
      })
  }

    render() {
      // console.log('---------products',this.props.products)
      const products = this.props.products ? this.props.products.map( (e, i) => {
        return <div key={i} className='item'>
<div className='item-contain'>
                <p>{e.productname}</p>
                {/* <h2>{e.productshortdesc} </h2> */}
                <img src ={e.productimage} alt={e.productname}  />
                {/* <h3> {e.productcartdesc} </h3> */}
                <p>${e.productprice}</p>

                <p className='stock'>{e.productstock <=0 ? 'out-of-stock' : e.productstock >0 && e.productstock <= 10 ? 'limited-stock' : 'in-stock'}</p>
                <Link to='/product'><button onClick={() => this.props.getProduct({ name: e.productname, id:e.productid, image: e.productimage, price: e.productprice, info: e.productcartdesc, subinfo: e.productshortdesc })}>Details</button></Link>
</div>
               </div>
      }): 'nothing to display'
      // { this.props.cart > 0 ? console.log( '---------productid', this.props.cart[0].productid : null) }
        return (
          <div>
            {/* <TabsData/> */}
            <div className='container'>
            <div className='sidebar'>sorting component would go here</div>
            {products}
            <div className='footer'>footer component here</div>
            </div>
          </div>

        )
    }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    product: state.product
  }
}
export default connect(mapStateToProps, {getProducts, getProduct})(Shop)

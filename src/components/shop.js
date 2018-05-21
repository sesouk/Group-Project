import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { getProducts } from '../ducks/reducer'

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
      console.log('---------products',this.props.products)
      const products = this.props.products.map( (e, i) => {
        return <div key={i} >
                <h1>{e.productname}</h1>
                <span>{e.productprice}</span>
                <span>{e.productstock <=0 ? ' out-of-stock' : e.productstock >0 && e.productstock <= 10 ? ' limited-stock' : ' in-stock'}</span>
               </div>
      })
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
    products: state.products
  }
}
export default connect(mapStateToProps, {getProducts})(Shop)
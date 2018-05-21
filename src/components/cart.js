import React, { Component } from 'react'
import axios from 'axios'
import { getProducts } from '../ducks/reducer'
import { connect } from 'react-redux'

class Cart extends Component {
    render() {
        return (
          <div>
            <h1>Cart</h1>
          </div>
        )
    }
}
const mapStateToProps = state => {
  return {
    cart: state.c
  }
}

export default connect(mapStateToProps)(Cart)
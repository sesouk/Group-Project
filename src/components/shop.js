import React, { Component } from 'react'

class Shop extends Component {
    constructor(){
        super()

    }
    render() {
        return (
            <h1>Stop N Shop</h1>
        )
    }
}

const mapStateToProps = state => {
    return {
      cart: state.cart
    };
  };
  
  export default connect(mapStateToProps, { addToCart })(Shop);
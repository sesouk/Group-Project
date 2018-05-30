import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import login from './login'
import '../Styling/nav.css'

export default class Nav extends Component {
  constructor(){
    super()
  }
    render() {
        return (
    <nav>
        <span className='nav-logo'><button>LOGO HERE</button></span>
        <span><Link to="/"><button>Home</button></Link></span>
        <span><Link to="/shop"><button>Shop</button></Link></span>
        <span><Link to="/cart"><button>Cart</button></Link></span>
        <span><Link to="/checkout"><button>Checkout</button></Link></span>
        <span><button onClick={()=>login()}>Login</button></span>


    </nav>
        );
    }
}
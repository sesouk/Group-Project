import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styling/nav.css'

export default class Nav extends Component {
    render() {
        return (
    <nav>
        <span><button className='nav-logo'>LOGO HERE</button></span>
        <span><Link to="/"><button>Home</button></Link></span>
        <span><Link to="/shop"><button>Shop</button></Link></span>
        <span><Link to="/cart"><button>Cart</button></Link></span>
    </nav>
        );
    }
}
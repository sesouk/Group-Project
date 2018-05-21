import React, { Component } from 'react'
import routes from './routes'
import { NavLink } from 'react-router-dom'

const Nav = (props) => <nav>
  <ul>
  <li>
  <NavLink to='/'>Home</NavLink>
  </li>
  <li>
  <NavLink to='/shop'>Shop</NavLink>
  </li>
  <li>  
  <NavLink to='/cart'>Cart</NavLink>
  </li>
  </ul>
</nav>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        { routes }
      </div>
    )
  }
}

export default App

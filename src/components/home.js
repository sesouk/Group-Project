import React, { Component } from 'react'
import login from './login'
import axios from 'axios'


export default class Home extends Component {
  constructor(){
    super()
    
    this.userInfo = this.userInfo.bind(this)
  }
  componentDidMount(){

    
  }

  userInfo(){
    axios.get('/api/user-data')
      .then( response => {
        console.log(response)
      })
      .catch( err => {
        console.log( err )
      })
  }
  render() {
    // console.log(login)
    // console.log(req.session)
        return (
            <div>
            <h1>Home Page</h1>
            <button onClick={() => login() }>login</button>
            <button onClick={() => this.userInfo()}>user</button>
            </div>
        )
    }
}
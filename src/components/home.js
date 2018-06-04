import React, { Component } from 'react'
import login from './login'
import axios from 'axios'


export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      what: false
    }
  }
  componentDidMount(){

    
  }

  render() {
    // console.log(login)
    // console.log(req.session)
        return (
            <div>
            <h1>Guess what?</h1>
            <button onClick={() => this.setState({ what: true })}>What?</button>
            { this.state.what ? <div>Chicken Butt</div> : null }
            </div>
        )
    }
}
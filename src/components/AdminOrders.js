import React, { Component } from 'react';
import axios from 'axios';
export default class AdminOrders extends Component {
    constructor(){
        super()
            this.state={
                orders:[]
            }
        
    }
    componentDidMount(){
        axios.get('/api/allOrders').then( response => {
            console.log("response on admin orders page",response.data)
            this.setState({orders:response.data})
          })
          .catch( err => {
            console.log( err )
          })
    }

    render() {
        return (
            <div>
                <h1> Inside orders </h1>
                </div>

            
        );
    }
}


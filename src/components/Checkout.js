import React, { Component } from 'react';

export default class Checkout extends Component {
    constructor(){
        super();
            this.state ={
            email:'',
            shipping_address:'',
            city:'',
            state:'',
            zip_code:'',
            phone_number:''


        }
    }
    render() {
        return (
            
            <div className ="form">
                <label>Email address</label>
                            <input type="text" className="" placeholder="email" onChange={e => this.setState({email: e.target.value})}/>

                <label>Shipping  Address</label>
                            <input type="text" className="" placeholder="address" onChange={e => this.setState({shipping_address: e.target.value})}/>
             <label>City</label>
                            <input type="text" className="" placeholder="city" onChange={e => this.setState({city: e.target.value})}/>
            <label>State</label>
                            <input type="text" className="" placeholder="state" onChange={e => this.setState({state: e.target.value})}/>
            <label>Zip Code</label>
                            <input type="text" className="" placeholder="zip_code" onChange={e => this.setState({zip_code: e.target.value})}/>
            <label>Phone number</label>
                            <input type="text" className="" placeholder="phone" onChange={e => this.setState({phone_number: e.target.value})}/>

                </div>

        );
    }
}


import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import {  cartTotal} from '../ducks/reducer'
import { connect } from 'react-redux'
import MiniCart from "./MiniCart";
import StripeCheckout from './StripeCheckout'
import axios from 'axios';






// const styles = theme => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//     color: "red"
//   }
// });

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      address: '',
      zip_code: '',
      state: '',
      city: '',
      phone: '',
      username:''
    }
    this.shippingDetails = this.shippingDetails.bind(this)
  }

  shippingDetails(){
    console.log("state values", this.state)
    console.log("props value",this.props)
    const{email,address,zip_code, state, city,phone} = this.state
    axios.post('/api/shippingDetails',{email,address,zip_code, state, city,phone}).then(res =>{
    console.log("Value from express "+ JSON.stringify(res.data))
  })
}


  render() {
    const total = this.props.total
    const { classes } = this.props;
    return (
   
      <div className="checkout_main_body">
                    <div className="checkout_body_form">
                        <div className="checkout_title">Check Out</div>

    
                        <TextField required
                         label="Email id"
                onChange={e => {
                  this.setState({ email: e.target.value })
                  console.log("insidecheckout", e.target.value)
                }
              }
            // className={classes.textField}
            // margin="normal"
          />
        < br />
          <TextField
            required
            label="Phone number"
            onChange={e => this.setState({ phone: e.target.value })}
            // className={classes.textField}
            margin="normal"
          />
          <br />
          <TextField
            required
            label="Enter your Address"
            // className={classes.textField}
            onChange={e => this.setState({ address: e.target.value })}
            margin="normal"
          />
          <br />

          <TextField
            required
            label="City"
            // className={classes.textField}
            onChange={e => this.setState({ city: e.target.value })}
            margin="normal"
          />
               <br />
           <TextField
            required
            label="Zip Code"
            // className={classes.textField}
            onChange={e => this.setState({ zip_code: e.target.value })}
            margin="normal"
          />
          <br />
          <div className="checkout_third_wrapper">
  
                            <select   onChange={e => this.setState({ state: e.target.value })}>
                                <option value="State">State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>

          <br />
         
       
          <br />
          {/* <button onClick ={()=>this.shippingDetails()} > Save detials </button> */}
          <br />
          <br />
        </div>
        
        
        <div className="checkout_minicart"> 
        <MiniCart />
     
        <div > 
          <div onClick ={()=>this.shippingDetails()} >
        <StripeCheckout 
        shippingAddress ={this.state.address}
        amount = {((total * 1.06) + 5).toFixed(2)}
        zip_code={true}
        token ={this.onToken}
        />
        </div>
        </div>
        </div>
         </div>
          </div>
    
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    total: state.cart_total
  }
}

export default  connect(mapStateToProps,{cartTotal} )(Checkout);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

import Payment from './Payment'
import MiniCart from './MiniCart'


const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
      color:'red'
   
    },
  });
  


class Checkout extends React.Component {
    constructor(){
        super();
        this.state = {
            email:'',
            address:'',
            zip_code:'',
            state:'',
            city:'',
            phone:''

          };

    }
 

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
        <div>
        <div >
          <TextField className={this.props.classes.container}
           label="Enter your Email"
           
            className={this.props.classes.textField}
        //    value={this.state.email}
           margin="normal"
          />
          <br />
          <TextField
          required
          label="Enter your Address"
           
            className={classes.textField}
            margin="normal"
          />
          <br />

     <TextField
          required
          label="City"
           
            className={classes.textField}
            margin="normal"
          />
          <br />
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={<Input id="age-native-helper" />}
          >

        
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
                                </NativeSelect>
          
          <br />
          <TextField
          required
          label="Phone number"
           
            className={classes.textField}
            margin="normal"
          />
          <br />
          <InputLabel> Order Total</InputLabel>
           <Input
         
            id="adornment-amount"
            label="Order Total"
            className={classes.textField}
            value={this.state.amount}
            onChange={this.handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
<br />
        <br />
        </div>
          <Payment />
          <MiniCart />
          </div>
      );
    };
}
    
    // Checkout.propTypes = {
    //   classes: PropTypes.object.isRequired,
    // };
    
    export default withStyles(styles)(Checkout);
    
         
               
                    
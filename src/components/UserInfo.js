import React, { Component } from "react";
import "./../Styling/checkout.css";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      address: "",
      zip_code: "",
      state: "",
      city: "",
      phone: "",
      user:[]
    };
this.updateUserProfile = this.updateUserProfile.bind(this);
  }
  componentDidMount() {
    axios.get("/api/userdetails").then(response => {
      console.log("inside user details data", response.data);
      this.setState({
        address: response.data[0].useraddress,
        city: response.data[0].usercity,
        state: response.data[0].userstate,
        zip_code: response.data[0].userzip,
        phone: response.data[0].userphone,
        username: response.data[0].username,
        email:response.data[0].useremail
      });
    });
}


updateUserProfile() {
    console.log("inside update profile", this.state)
    const{address,city,state,zip_code,phone}=this.state
    axios.post('/api/updateuserProfile',{address,city,state,zip_code,phone})
    .then(response => this.setState({ user:response.data}));

        
        alert("Your profile has been updated successfully!!")
        this.setState({ address:"",city: "" ,state: "" ,zip_code: "" ,phone: "" });
    
}

  
  render() {
    return (
        <div className="checkout_body_form ">
          <div className="checkout_summary">
    {window.location.pathname==='/userprofile' ? <h3>Please Edit your profile</h3> :   <h3>Check Out </h3> }
            
            <div className="checkout_box">
            <TextField
                required
                label="Email id"
                margin="normal"
                value={this.state.email}
                onChange={e => {
                  this.setState({ email: e.target.value });
                  console.log("insidecheckout", e.target.value);
                }}
              />
              <br />
              <TextField
                required
                label="Address"
                margin="normal"
                value={this.state.address}
                onChange={e => {
                  this.setState({ address: e.target.value });
                  console.log("insidecheckout", e.target.value);
                }}
              />
              <br />
              <TextField
                required
                label="Phone number"
                value={this.state.phone}
                onChange={e => this.setState({ phone: e.target.value })}
                margin="normal"
              />
              <br />
              <TextField
                required
                label="City"
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}
                margin="normal"
              />
              <br />
              <TextField
                required
                label="Zip Code"
                value={this.state.zip_code}
                onChange={e => this.setState({ zip_code: e.target.value })}
                margin="normal"
              />


              <div className="checkout_third_wrapper">
                <select
                  value={this.state.state}
                  onChange={e => this.setState({ state: e.target.value })}
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
                </select>
              </div>
           
              <br />
              <br />
              {window.location.pathname==='/userprofile' ?   <Button variant="raised" color="primary" onClick={this.updateUserProfile}>
                Submit
              </Button>
              : 
              null
      }
            </div>
          </div>
        </div>
     
    );
  }
}

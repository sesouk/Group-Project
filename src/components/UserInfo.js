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
        username: response.data[0].username
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
      <div className="checkout_main_body">
        <div className="checkout_body_form ">
          <div className="checkout_summary">
            <h3>Please Edit your profile</h3>
            <div className="checkout_box">
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
                label="State"
                value={this.state.state}
                onChange={e => this.setState({ state: e.target.value })}
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

              <br />
              <Button variant="raised" color="primary" onClick={this.updateUserProfile}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

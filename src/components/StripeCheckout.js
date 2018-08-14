// import React, { Component } from 'react';
// import axios from 'axios';
// import StripeCheckout from 'react-stripe-checkout';

// const CURRENCY = 'USD';

// const fromUSDToCent = amount => amount * 100;

// const successPayment = data => {
//   alert('Payment Successful');
// };

// const errorPayment = data => {
//   alert('Payment Error');
// };

// const onToken = (amount) => token =>
//   axios.post('/api/payment',
//     {
//       // name,
//       // shippingAddress,
//       source: token.id,
//       currency: CURRENCY,
//       email:token.email,
//       amount: fromUSDToCent(amount)
//     }).then(successPayment)
//     .catch(errorPayment);
//     console.log("payment failed");

// const Checkout = ({ name, amount }) =>
//   <StripeCheckout
//     // acct= {acct}
//     name='Stop-n-Shop'
//     amount={fromUSDToCent(amount)}
//     token={onToken(amount)}
//     currency={CURRENCY}
//     stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
//   />

// export default Checkout;

import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Redirect } from "react-router-dom";
import OrderConfirmation from "./OrderConfirmation";
import { connect } from "react-redux";
import axios from "axios";

const CURRENCY = "USD";

const fromUSDToCent = amount => amount * 100;

class TakeMoney extends Component {
  constructor() {
    super();

    this.state = {
      orderComplete: false,
      // orderid: 11,
      orderNumber: "",
      order: [],
      lineitem: []
    };
  }

  successPayment = data => {
    // console.log("Payment Successful", data.data[0].orderid);
    const orderid = data.data[0].orderid;
    axios.post("/api/lineitem/", { orderid })
    .then(response => this.setState({ lineitem: response.data }));
     this.setState({ orderNumber: data.data[0].orderid, orderComplete: true });
    // console.log("values in sate", this.state.orderNumber);
  };

  errorPayment = data => { alert("Payment Error");
};

  onToken = (amount, tax) => token =>
    axios.post("/api/payment", {
        source: token.id,
        currency: CURRENCY,
        email: token.email,
        tax: tax,
        amount: fromUSDToCent(amount)
      })
      .then(this.successPayment)
      .catch(this.errorPayment);

  render() {
    if (this.state.orderComplete) {
      return <Redirect to={`/orderConfirmation/${this.state.orderNumber}`} />;
    }

    const { tax, amount } = this.props;
    return (
      <div>
        <StripeCheckout
          name="Stop-n-Shop"
          tax
          amount={fromUSDToCent(amount)}
          token={this.onToken(amount, tax)}
          currency={CURRENCY}
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(TakeMoney);

import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const CURRENCY = 'USD';

const fromUSDToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount) => token =>
  axios.post('/api/payment',
    {
      // name,
      // shippingAddress,
      source: token.id,
      currency: CURRENCY,
      email:token.email,
      amount: fromUSDToCent(amount)
    }).then(successPayment)
    .catch(errorPayment);
    console.log("payment failed");

const Checkout = ({ name, amount }) =>
  <StripeCheckout
    // acct= {acct}
    name='Stop-n-Shop'
    amount={fromUSDToCent(amount)}
    token={onToken(amount)}
    currency={CURRENCY}
    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
  />

export default Checkout;



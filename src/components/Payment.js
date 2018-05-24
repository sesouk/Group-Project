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

const onToken = (amount, description,register) => token =>
  axios.post('/api/payment',
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromUSDToCent(amount)
    }).then((register()))
    .catch(errorPayment);
    console.log("payment failed");

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description='stop-n-shop'
    amount={fromUSDToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE}
  />

export default Checkout;



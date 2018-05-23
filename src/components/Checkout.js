import React, { Component } from 'react';
import axios from 'axios';
// import StripeCheckout from 'react-stripe-checkout';

// // import STRIPE_PUBLISHABLE from './constants/stripe';
// // import PAYMENT_SERVER_URL from './constants/server';

// const CURRENCY = 'USD';

// const fromUSDToCent = amount => amount * 100;

// const successPayment = data => {
//   alert('Payment Successful');
// };

// const errorPayment = data => {
//   alert('Payment Error');
// };

// const onToken = (amount, description) => token =>
//   axios.post(PAYMENT_SERVER_URL,
//     {
//       description,
//       source: token.id,
//       currency: CURRENCY,
//       amount: fromUSDToCent(amount)
//     })
//     .then(successPayment)
//     .catch(errorPayment);

// const Checkout = ({ name, description, amount }) =>
//   <StripeCheckout
//     name={name}
//     description={description}
//     amount={fromUSDToCent(amount)}
//     token={onToken(amount, description)}
//     currency={CURRENCY}
//     stripeKey={STRIPE_PUBLISHABLE}
//   />

// export default Checkout;


export default class Checkout extends Component {
    render() {
        return (
            <div>
                <h1> In checkout page </h1>
                <form action="/charge" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_x2OHfS8q85xa9GuqtHt2BWMk"
    data-amount="2500"
    data-name="stop-n-shop"
    data-description="Widget"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto">
  </script>
</form>
                </div>

            
        );
    }
}

require('dotenv').config()
const axios = require('axios')
const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)


module.exports = {
    shippingDetails: (req, res) => {
        console.log('current session', req.session.shippingDetails)
        req.session.shippingDetails = req.body;
        console.log('shipping details in session', req.session.shippingDetails)
        res.send("okie")
        
    },
    paymentAPI(req, res) {
        console.log("inside stripe",req.session.shippingDetails);
        console.log('------req.body', req.body);
        const { source, currency, amount, acct, addresses, email } = req.body

        stripe.charges.create({ source, currency, amount }, { stripe_account: acct }, (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).send({ error: stripeErr })
            } else {
                const {email,address,zip_code, state, city, phone} = req.session.shippingDetails
                console.log("NEW", req.session.shippingDetails)
                
                    req.app.get('db').createOrder([email,address,zip_code, state, city,phone]).then(orders => {
                        res.status(200).send(orders)
                    }).catch(error => {
                        console.log("post orders controller error", error)
                    
                    })
               
    
            }
        })
    }
}
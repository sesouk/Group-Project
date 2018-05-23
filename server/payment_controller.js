require('dotenv').config();
const axios = require ('axios')
// const stripe = require('stripe')(process.env.STRIPE_SECRETKEY)
module.exports ={
    // paymentAPI :(req,res) =>{
    //     console.log(req.body);
    //     const {currency,amount,email,address} = req.body
    //     stripe.customers.create({
    //         email:req.body.stripeEmail,
    //         source:req.body.stripeToken
    //     }).then(customer=>stripe.charges.create({
    //         amount,
    //         description:'',
    //         currency:'USD',
    //         customer:customer.id
    //     }))
    //     .then(charge =>{
    //         res.render('success')
    //     })

    // }
}
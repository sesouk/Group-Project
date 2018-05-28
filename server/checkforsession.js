module.exports = ( req, res, next ) => {
  const { session } = req
  if (! session.user ) {
    console.log("inside middleware")
      session.user = { name: '', email: '', phone:'', address: '', city: '', state:'', zipcode:'', cart: [], lastLocation: ''}
  }
  next()
}
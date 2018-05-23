require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const massive = require("massive")
const userCtrl = require('./user_controller')
const productCtrl = require('./product_controller')
const orderCtrl = require('./order_controller')
const paymentCtrl = require('./payment_controller')

const app = express()
app.use(bodyParser.json())
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
)
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db)
  })
  .catch(err => console.log("error", err))

const PORT = 9000
app.listen(PORT, () => {
  console.log(`It's over ${PORT}!!!`)
})

//***********PRODUCT Endpoints *************/
app.get("/api/category",productCtrl.getCategoryData)
app.get("/api/shop", productCtrl.getProducts) //tested
app.delete("/api/shop/:id", productCtrl.deleteProduct) //tested
app.put("/api/shop/:id", productCtrl.updateProduct) //tested
app.post("/api/shop", productCtrl.createProduct) //tested


//*************USER login/logout Endpoints**************/
// app.get("/auth/callback", userCtrl.auth) //auth0 endpoint
// app.post("/api/logout", userCtrl.logout)
app.get("/api/user-data", (req, res) => {
  res.json({ user: req.session.user })
})
// app.post("/api/cart", userCtrl.cart)

//************User Endpoints ***************************/
// app.get('api/register',userCtrl.createUser)
app.get('/api/users', userCtrl.getUsers) //for admin page to get all users //tested
app.get('/api/user/:id',userCtrl.getUserByID) //tested

//***************ORDER Endpoints *********************/
app.get('/api/orders', orderCtrl.allOrders) //get orders//tested

//***************Payment****************** */
app.get('/',(req,res)=>{
  res.render('index');
})

app.post('/api/payment',paymentCtrl.paymentAPI)
require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const cloudinary = require('cloudinary');
const massive = require("massive")
const userCtrl = require('./user_controller')
const productCtrl = require('./product_controller')
const orderCtrl = require('./order_controller')
const paymentCtrl = require('./payment_controller')
const authCtrl = require('./auth_controller')
const path = require('path')

const checkForSession = require('./checkForSession')

const app = express()
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/../build`));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
)

app.use( checkForSession )

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
app.get("/api/product/:id", productCtrl.getProduct)
app.delete("/api/shop/:id", productCtrl.deleteProduct) //tested
app.put("/api/shop/:id", productCtrl.updateProduct) //tested
app.post("/api/createProduct", productCtrl.createProduct) //tested
app.get("/api/itemOptions", productCtrl.itemOptions) //tested
app.get("/api/optionByProductID/:id",productCtrl.optionByProductID)


//*************USER login/logout Endpoints**************/
app.get("/auth/callback", authCtrl.auth) //auth0 endpoint
app.post("/api/logout", authCtrl.logout)
app.get("/api/user-data", userCtrl.getUser)
app.post("/api/cartToSession", userCtrl.cartToSession)
app.post('/api/sessionLocation', userCtrl.sessionLocation)
app.get('/api/cartToRedux', userCtrl.cartToRedux)
app.post('/api/updateuserProfile',userCtrl.updateUserProfile)

//************User Endpoints ***************************/
// app.get('api/register',userCtrl.createUser)
app.get('/api/users', userCtrl.getUsers) //for admin page to get all users //tested
app.get('/api/user/:id',userCtrl.getUserByID) //tested
app.get('/api/userdetails',userCtrl.userdetailsByID) //tested
app.get('/api/orders',orderCtrl.orderByUserId)

//***************ORDER Endpoints *********************/
app.post('/api/lineitem/', orderCtrl.addToLineItem) 

//***************Payment****************** */
app.post('/api/payment',paymentCtrl.paymentAPI)
app.post('/api/shippingDetails',paymentCtrl.shippingDetails)
app.get('/api/checksession',userCtrl.checkSession)

//*************Cloudinary Image uploader  */
app.get('/api/upload',productCtrl.imageUpload);

//*************Admin Endpoints************ */
app.get('/api/allOrders',orderCtrl.allOrdersAdmin)

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})
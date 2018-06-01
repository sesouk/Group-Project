import React from 'react'
import home from './components/home'
import shop from './components/shop'
import Admin from './components/Admin'
import TabsData from './components/TabsData'
import NewProduct from './components/NewProduct'
import Checkout from './components/Checkout'
import StripeCheckout from './components/StripeCheckout'
import product from './components/product'
import {Route, Switch} from 'react-router-dom'
import OrderConfirmation from './components/OrderConfirmation'
import redirect from './components/redirect'
import Profile from './components/Profile'


export default (

        <Switch>
            <Route component={home} exact path='/'/>
            <Route component={shop} path='/shop'/>
            <Route component={Admin} exact path='/admin'/>
            <Route component={NewProduct} path ='/admin/NewProduct'/>
            <Route component={TabsData} path ='/tabs'/>
            <Route component={Checkout} path ='/checkout'/>
            <Route component={StripeCheckout} path ='/StripeCheckout' />
            <Route component={product} path='/product'/>
            <Route component={OrderConfirmation} path='/orderConfirmation/:orderNumber'/>
            <Route component={redirect} path='./redirect'/>
            <Route component={Profile} path='/userprofile' />
        </Switch>

)
import React from 'react'
import home from './components/home'
import shop from './components/shop'
// import admin from './components/admin'
import TabsData from './components/TabsData'
import newproduct from './components/newproduct'
import Checkout from './components/Checkout'
import StripeCheckout from './components/StripeCheckout'
import {Route, Switch} from 'react-router-dom'
import OrderConfirmation from './components/OrderConfirmation'
import redirect from './components/redirect'


export default (

        <Switch>
            <Route component={home} exact path='/'/>
            <Route component={shop} path='/shop'/>
            {/* <Route component={admin} exact path='/admin'/> */}
            <Route component={newproduct} path ='/admin/newproduct'/>
            <Route component={TabsData} path ='/tabs'/>
            <Route component={Checkout} path ='/checkout'/>
            <Route component={StripeCheckout} path ='/StripeCheckout' />
            <Route component={OrderConfirmation} path='/orderConfirmation/:orderNumber'/>
            <Route component={redirect} path='/redirect'/>
        </Switch>

)
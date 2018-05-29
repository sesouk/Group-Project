import React from 'react'
import cart from './components/cart'
import home from './components/home'
import shop from './components/shop'
import Admin from './components/Admin'
import TabsData from './components/TabsData'
import newproduct from './components/newproduct'
import Checkout from './components/Checkout'
import StripeCheckout from './components/StripeCheckout'
import product from './components/product'
import options from './components/options'
import {Route, Switch} from 'react-router-dom'
import OrderConfirmation from './components/OrderConfirmation'
import { BrowserRouter } from 'react-router-dom'


export default (

        <Switch>
            <Route component={home} exact path='/'/>
            <Route component={shop} path='/shop'/>
            <Route component={cart} path='/cart'/>
            <Route component={Admin} exact path='/admin'/>
            <Route component={newproduct} path ='/admin/newproduct'/>
            <Route component={TabsData} path ='/tabs'/>
            <Route component={Checkout} path ='/checkout'/>
            <Route component={StripeCheckout} path ='/StripeCheckout' />
            <Route component={product} path='/product'/>
            <Route component={OrderConfirmation} path='/orderConfirmation'/>
            <Route component={options} path='/options'/>
        </Switch>

)
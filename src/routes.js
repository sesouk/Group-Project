import React from 'react'
import cart from './components/cart'
import home from './components/home'
import shop from './components/shop'
// import admin from './components/admin'
import TabsData from './components/TabsData'
import newproduct from './components/newproduct'
import Checkout from './components/Checkout'
import Payment from './components/Payment'
import product from './components/product'
import options from './components/options'
import {Route, Switch} from 'react-router-dom'


export default (
        <Switch>
            <Route component={home} exact path='/'/>
            <Route component={shop} path='/shop'/>
            <Route component={cart} path='/cart'/>
            {/* <Route component={admin} exact path='/admin'/> */}
            <Route component={newproduct} path ='/admin/newproduct'/>
            <Route component={TabsData} path ='/tabs'/>
            <Route component={Checkout} path ='/checkout'/>
            <Route component={Payment} path ='/payment' />
            <Route component={product} path='/product'/>
            <Route component={options} path='/options'/>
        </Switch>
)
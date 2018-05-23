import React from 'react'
import cart from './components/cart'
import home from './components/home'
import shop from './components/shop'
import admin from './components/Admin'
import TabsData from './components/TabsData'
import newproduct from './components/newproduct'
import Checkout from './components/Checkout'
import {Route, Switch} from 'react-router-dom'


export default (
        <Switch>
            <Route component={home} exact path='/'/>
            <Route component={shop} path='/shop'/>
            <Route component={cart} path='/cart'/>
            <Route component={admin} exact path='/admin'/>
            <Route component={newproduct} path ='/admin/newproduct'/>
            <Route component={TabsData} path ='/tabs'/>
            <Route component={Checkout} path ='/checkout'/>

        </Switch>
)
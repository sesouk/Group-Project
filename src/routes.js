import React from 'react'
import cart from './components/cart'
import home from './components/home'
import shop from './components/shop'
import admin from './components/admin'
import newproduct from './components/newproduct'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

export default (
    <BrowserRouter>
        <Switch>
            <Route component={home} exact path='/'/>
            <Route component={shop} path='/shop'/>
            <Route component={cart} path='/cart'/>
            <Route component={admin} exact path='/admin'/>
            <Route component={newproduct} path ='/admin/newproduct'/>
        </Switch>
    </BrowserRouter>
)
import React from 'react'
import cart from './components/cart'
import home from './components/home'
import shop from './components/shop'
import Admin from './components/admin'
import TabsData from './components/TabsData'
import newproduct from './components/newproduct'
import {Route, Switch} from 'react-router-dom'


export default (
        <Switch>
            <Route component={home} exact path='/'/>
            <Route component={shop} path='/shop'/>
            <Route component={cart} path='/cart'/>
            <Route component={Admin} exact path='/admin'/>
            <Route component={newproduct} path ='/admin/newproduct'/>
            <Route component={TabsData} path ='/tabs'/>

        </Switch>
)
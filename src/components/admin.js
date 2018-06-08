import React, { Component } from 'react'
import AdminSidenav from './AdminSidenav';
// import NewProduct from './NewProduct'
export default class Admin extends Component {
    render() {
        return (
            <div>
            <h1>Admin</h1>
            <AdminSidenav />
            {/* <NewProduct /> */}

            </div>
        )
    }
}
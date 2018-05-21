import React, { Component } from 'react'
import AdminSidenav from './AdminSidenav';

export default class Admin extends Component {
    render() {
        return (
            <div>
            <h1>Admin</h1>
            <AdminSidenav />
            </div>
        )
    }
}
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'

const style ={
    paper:{
        display:'inline-block',
        float:'left',
        margin:'15px 30px 15px 0',
    },
    rightIcon:{
       textAlign:'center',
       lineHeight:'24px'
    },
}

export default class AdminSidenav extends Component {
    render() {
        return (
            <div>
                <Paper style ={style.paper}>
                <Menu>
                    <MenuItem primaryText ="All products" />
            
                <MenuItem primaryText = "Users"  />
                <MenuItem primaryText="Analytics" />
                <MenuItem primaryText ="Orders"  />
                <MenuItem primaryText ="Order Tracking" />
                </Menu>
    </Paper>
    <p> Hey </p>
                </div>

        );
    }
}
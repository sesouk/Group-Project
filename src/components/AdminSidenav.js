import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

const styles = theme => ({
    menuItem: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
          color: theme.palette.common.black,
        },
      },
    },
    primary: {},
    icon: {},
  });

export default class AdminSidenav extends Component {
    render() {
        return (
            <div>
               
               <MenuList>
                    <MenuItem primary ="All products" />
            
                <MenuItem primaryText = "Users"  />
                <MenuItem primaryText="Analytics" />
                <MenuItem primaryText ="Orders"  />
                <MenuItem primaryText ="Order Tracking" />
                </MenuList>
    
    <Button variant="raised" color="primary">
      Hello World
    </Button>
    <p> Hey </p>
                </div>

        );
    }
}
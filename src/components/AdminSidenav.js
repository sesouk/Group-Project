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
                     <Button variant="raised" color="primary">
                     All products
    </Button>
    <Button variant="raised" color="primary">
    Users
    </Button>
    <Button variant="raised" color="primary">
    Orders
    </Button>
    <Button variant="raised" color="primary">
                     Add new products
    </Button>
  
            
                
                </MenuList>
    
  
                </div>

        );
    }
}
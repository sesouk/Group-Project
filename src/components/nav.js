import React from 'react'
import { Link } from 'react-router-dom'
import TemporaryDrawer from './drawer'
import login from './login'
import '../Styling/nav.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Stop N Shop
          </Typography>
          <Link to='/shop'><Button color="inherit">Shop</Button></Link>
          <Link to='/userprofile'><Button color="inherit">Profile</Button></Link>
          <TemporaryDrawer/>
          <Link to='/shop'><Button color="inherit" onClick={()=>login()}>Login</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
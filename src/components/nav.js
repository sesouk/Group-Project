import React, { Component } from 'react'
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
import axios from 'axios';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

class Nav extends Component {
  constructor(props){
    super();
    this.state={
      userDetails:''
    }
  }
  componentDidMount(){
    axios.get('/api/user-data')
      .then( response => {
        console.log("inside navbar",response.data)
      this.setState({userDetails:response.data.name})
      })
      .catch( err => {
        console.log( err )
      })
  }
  render() {
    const { classes } = this.props;

    return (
      <div>
      {this.state.userDetails.length===0 
      ?
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>  
              Stop N Shop
            </Link>  
          </Typography>
          <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">
              Shop
            </Button>
          </Link>
          <TemporaryDrawer/>
            <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" onClick={()=>login()}>
                Login
              </Button>
          </Link>
        </Toolbar>       
      </AppBar>
    </div>
        

      :
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>  
              Stop N Shop
            </Link>  
          </Typography>
          <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">
              Shop
            </Button>
          </Link>
          <TemporaryDrawer/>
            <Link to='/userprofile' style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" >
                Profile
              </Button>
          </Link>
          <Link to='/logout' style={{ textDecoration: 'none', color: 'white' }}>
              <Button color="inherit" >
                Logout
              </Button>
          </Link>
        </Toolbar>       
      </AppBar>
    </div>
    } 
    

        </div>
      
    );
  }
}
Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);

// function Nav(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="title" color="inherit" className={classes.flex}>
//             <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>  
//               Stop N Shop
//             </Link>  
//           </Typography>
//           <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>
//             <Button color="inherit">
//               Shop
//             </Button>
//           </Link>
//           <TemporaryDrawer/>
//             <Link to='/shop' style={{ textDecoration: 'none', color: 'white' }}>
//               <Button color="inherit" onClick={()=>login()}>
//                 Login
//               </Button>
//           </Link>
//         </Toolbar>       
//       </AppBar>
//     </div>
//   );
// }

// Nav.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Nav);
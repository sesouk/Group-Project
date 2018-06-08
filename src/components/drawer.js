import React from 'react';
import { connect } from 'react-redux'
import Drawer from '@material-ui/core/Drawer';
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button';
import Cart from './cart'
import '../Styling/nav.css'

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { length } = this.props.cart
    const cartDrawer = (
      <div className='cartDrawer'>
          <Cart></Cart>
      </div>
    )

    return (
      <div className="cart-drawer">
        <Badge badgeContent={length} color="primary">
        <Button color='inherit' onClick={this.toggleDrawer('left', true)}>Cart</Button>
        </Badge>
        <Drawer anchor="left" open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div>
            {cartDrawer}
          </div>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps)(TemporaryDrawer);
import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import getOptions from '../ducks/reducer'

class Options extends Component {
    componentDidMount(props){
        axios.get('/api/itemOptions')
      .then( options => {
        this.props.getOptions(options.data)
        console.log('OPTIONS------------', options.data);
      })
      .catch( err => {
        console.log( err )
      })
    }
    render() {
        return (
            <div>Hi</div>
        );
    }
}

const mapStateToProps = state => {
    return {
      options: state.options
    }
  }
  export default connect(mapStateToProps, getOptions)(Options)
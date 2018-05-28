import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { getOptions } from '../ducks/reducer'

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
        const optionsSize = this.props.options.map((e,i) => { while (e.optionattribute === 'size' && e.productid === 1
            )return <div>
                <input type="checkbox" value={e.value} name={e.optionattribute} id={e.productid}/>
                <label for={e.productid}>{e.value}</label>
            </div>
        })
        return (
            <div>{optionsSize}</div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
      options: state.options
    }
  }
  export default connect(mapStateToProps, {getOptions})(Options)
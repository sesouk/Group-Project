import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCategoryProducts} from '../ducks/reducer'
import Button from '@material-ui/core/Button';
import axios from 'axios';

class TabsData extends Component {
    constructor(){
        super();
        this.state={
            filterByCategory:'',
            category_items:[]

        }
        
    }
    componentDidMount(props){
        axios.get('/api/category')
          .then( products => {
            this.props.getCategoryProducts(products.data)
            // console.log('--------products', this.props.products )
          })
          .catch( err => {
            console.log( err )
          })
      }
    render() {
        
        const{itemList}=this.props;
        console.log("inside tabs",itemList);
        const{filterByCategory}=this.state;
        console.log("inside tabs filter value",filterByCategory);
        return (
            <div>
     <h1> Inside tabs </h1>
     <div className ="filter-data">
     <Button variant="raised" color="primary" onClick ={()=>this.setState({filterByCategory:'T-shirt'})}>
      T-shirts
    </Button>
    <Button variant="raised" color="primary" onClick ={()=>this.setState({filterByCategory:'Jeans'})}>
      Jeans
    </Button>
    <Button variant="raised" color="primary" onClick ={()=>this.setState({filterByCategory:'Watch'})}>
      Watch
    </Button>
    <Button variant="raised" color="primary" onClick ={()=>this.setState({filterByCategory:'Shoes'})}>
      Shoes
    </Button>

     </div>

                </div>

            
        );
    }
}
const mapStateToProps = state => {
    return {
        category_items: state.category_items,

    }
  }
  export default connect(mapStateToProps, {getCategoryProducts})(TabsData);
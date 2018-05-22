import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCategoryProducts} from '../ducks/reducer'
import Button from '@material-ui/core/Button';
import {filterCategory} from './../utils/function'
import ItemList from './ItemList'
import axios from 'axios';

class TabsData extends Component {
    constructor(){
        super();
        this.state={
            filterByCategory:'',
            category_items:'',
            allItems:''


        }
        
    }
    componentDidMount(props){
        axios.get('/api/category')
          .then( products => {
            this.props.getCategoryProducts(products.data)
            this.setState({allItems:products.data})
            console.log('--------products', this.state.allItems )
          })
          .catch( err => {
            console.log( err )
          })
      }
    render() {
        
        const{category_items}=this.props;
        const{filterByCategory,allItems}=this.state;
        console.log("inside tabs filter value",filterByCategory);
        const filteredItem = filterCategory(category_items,filterByCategory)
        
        return (
            <div>
     <h1> Inside tabs </h1>
     <div className ="filter-data">
    { console.log("in the tabs output is ",filteredItem)}

     <Button variant="raised" color="primary" value='T-shirts' onClick ={()=>this.setState({filterByCategory:'T-shirts'})}>
      T-shirts
    </Button>
    <Button variant="raised" color="primary" value='Jeans' onClick ={()=>this.setState({filterByCategory:'Jeans'})}>
      Jeans
    </Button>
    <Button variant="raised" color="primary" value='Watch' onClick ={()=>this.setState({filterByCategory:'Watches'})}>
      Watch
    </Button>
    <Button variant="raised" color="primary" value = 'Shoes' onClick ={()=>this.setState({filterByCategory:"Shoes"})}>
      Shoes
    </Button>

     </div>
<div>
   {/* Passing render props to ItemList component  */}
<ItemList>

   {filteredItem}
   {allItems}
   </ItemList>
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
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCategoryProducts,getProducts} from '../ducks/reducer'
import Button from '@material-ui/core/Button';
import {filterCategory} from './../utils/function'
import ItemList from './ItemList'
import axios from 'axios';

class TabsData extends Component {
    constructor(){
        super();
        this.state={
            filterByCategory:'',
            products:[],
         


        }
        
    }
 
    render() {
   
        const{category_items,products}=this.props;
        const{filterByCategory}=this.state;
    
        console.log("inside tabs filter value",this.props.products);
        const filteredItem = filterCategory(category_items,filterByCategory)
        
        return (
            <div>
     <h1> Inside tabs </h1>
     <div className ="filter-data">
    { console.log("in the tabs output is ",filteredItem)}

     <Button variant="raised" color="primary" value='T-shirts' onClick ={()=>this.setState({filterByCategory:'"shirt"'})}>
      T-shirts
    </Button>
    <Button variant="raised" color="primary" value='Jeans' onClick ={()=>this.setState({filterByCategory:'pant'})}>
      Jeans
    </Button>
    
    <Button variant="raised" color="primary" value = 'Shoes' onClick ={()=>this.setState({filterByCategory:"shoe"})}>
      Shoes
    </Button>
    <Button variant="raised" color="primary" value='Watch' onClick ={()=>this.setState({filterByCategory:"accessory"})}>
     Accessory
    </Button>

     </div>
<div>
   {/* Passing render props to ItemList component  */}
<ItemList>

   {filteredItem}
   {/* {allItems} */}
   </ItemList>
  </div>
                </div>

            
        );
    }
}
const mapStateToProps = state => {
    return {
        category_items: state.category_items,
        products: state.products

    }
  }
  export default connect(mapStateToProps, {getCategoryProducts,getProducts})(TabsData);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getProducts, getProduct, actions ,reducedData} from '../ducks/reducer'
import '../Styling/shop.css'

 class ItemList extends Component {
  render() {
    const {reducedDataItems} = this.props.reducedDataItems
    const {filteredData}=this.props.filteredData
    console.log("fron redux",reducedDataItems)
    console.log("inside display list",this.props.filteredData)

    return (
      <div>
        
           {(this.props.filteredData.length!=0)
           ?
           <div className="container">
              { this.props.filteredData.map((e,i) => {
            return <div key={i} className='item'>
            <div className='item-contain'>
            <h2>{e.name} </h2>
                  <p> {e.products[0].productcartdesc}</p>
                  
                  <img src ={e.products[0].productimage} alt={e.products[0].productname}  />
                  {/* <h3> {e.productcartdesc} </h3> */}
                  <p>${e.products[0].productprice}</p>
    
                  <p className='stock'>{e.products[0].productstock <=0 ? 'out-of-stock' : e.products[0].productstock >0 && e.products[0].productstock <= 10 ? 'limited-stock' : 'in-stock'}</p>
                  <Link to='/product'><button onClick={() => this.props.getProduct({ name: e.products[0].productname, image: e.products[0].productimage, price: e.products[0].productprice, info: e.products[0].productcartdesc, subinfo: e.products[0].productshortdesc, details: e.products})}>Details</button></Link>
                  </div>
                 </div>
          })
        }

             </div>
             :
             <div className="container">
              { this.props.reducedDataItems.map((e,i) => {
        return <div key={i} className='item'>
        <div className='item-contain'>
        <h2>{e.name} </h2>
                  <p> {e.products[0].productcartdesc}</p>
              <img src ={e.products[0].productimage} alt={e.products[0].productname}  />
              {/* <h3> {e.productcartdesc} </h3> */}
              <p>${e.products[0].productprice}</p>

              <p className='stock'>{e.products[0].productstock <=0 ? 'out-of-stock' : e.products[0].productstock >0 && e.products[0].productstock <= 10 ? 'limited-stock' : 'in-stock'}</p>
              <Link to='/product'><button onClick={() => this.props.getProduct({ name: e.products[0].productname, image: e.products[0].productimage, price: e.products[0].productprice, info: e.products[0].productcartdesc, subinfo: e.products[0].productshortdesc, details: e.products})}>Details</button></Link>
              </div>
             </div>
      })
    }
               </div>
           }
        </div>


      
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    product: state.product,
    reducedDataItems:state.reducedDataItems

  }
}
export default connect(mapStateToProps, {getProducts, getProduct,reducedData})(ItemList);
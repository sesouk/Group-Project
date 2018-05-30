import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import {getProducts, getProduct, actions, reducedData } from "../ducks/reducer";
import "../Styling/shop.css";
import Button from "@material-ui/core/Button";
import TabsData from "./TabsData";
import ItemList from "./ItemList";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      filteredData: []
    };
  }
  
  componentDidMount(props) {
    axios.get("/api/shop")
      .then(products => {
        this.props.getProducts(products.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const reduced = this.props.products.reduce((arr, current) => {
      // console.log(current)
      if (!arr.length) {
        // console.log('no length')
        arr.push({
          name: current.productname,
          category: current.productcategory,
          products: [current]
        });
        return arr;
      }
      let i = arr.findIndex(e => {
        // console.log(e.name, current.productname)
        return e.name === current.productname;
      });
      if (i !== -1) {
        // console.log('duplicate item')
        arr[i].products.push(current);

        return arr;
      } else {
        // console.log('new item')
        arr.push({
          name: current.productname,
          category: current.productcategory,
          products: [current]
        });
        return arr;
      }
    }, []);

    const filterCategory = category => {
      const filtered = reduced.filter(
        item => item.category === category
      );
      this.setState({ filteredData: filtered });
    };

    const products = reduced.map((e,i) => {
      return <div key={i} className='item'>
      <div className='item-contain'>
            <p>{e.name}</p>
            <Link to='/product'>
              <img src ={e.products[0].productimage} alt={e.products[0].productname}
                onClick={() => this.props.getProduct({ 
                  name: e.products[0].productname, 
                  image: e.products[0].productimage, 
                  price: e.products[0].productprice, 
                  info: e.products[0].productcartdesc, 
                  subinfo: e.products[0].productshortdesc, 
                  details: e.products})}/>
              </Link>
            <p>${e.products[0].productprice}</p>
    
            <p className='stock'>
              {e.products[0].productstock <=0
              ? 'out-of-stock' 
              : e.products[0].productstock >0 && e.products[0].productstock <= 10 
              ? 'limited-stock' 
              : 'in-stock'}
            </p>
            
              {/* <button onClick={() => this.props.getProduct({ 
                name: e.products[0].productname, 
                image: e.products[0].productimage, 
                price: e.products[0].productprice, 
                info: e.products[0].productcartdesc, 
                subinfo: e.products[0].productshortdesc, 
                details: e.products})}>
                Details
              </button> */}
            
            </div>
           </div>
    })
    
    const filtered = this.state.filteredData.length ? this.state.filteredData.map((e,i) => {
      return <div key={i} className='item'>
      <div className='item-contain'>
            <p>{e.name}</p>
            <img src ={e.products[0].productimage} alt={e.products[0].productname}  />
            <p>${e.products[0].productprice}</p>
    
            <p className='stock'>
              {e.products[0].productstock <=0 
                ? 'out-of-stock' 
                : e.products[0].productstock >0 && e.products[0].productstock <= 10 
                ? 'limited-stock' 
                : 'in-stock'}
            </p>
            <Link to='/product'>
              <button onClick={() => this.props.getProduct({ 
                name: e.products[0].productname, 
                image: e.products[0].productimage, 
                price: e.products[0].productprice, 
                info: e.products[0].productcartdesc, 
                subinfo: e.products[0].productshortdesc, 
                details: e.products})}>
                Details
              </button>
            </Link>
            </div>
           </div>
    })
    : null
    const {reducedDataItems} = this.props.reducedDataItems
    const { category } = this.state;
    return (
      <div>
        <div>
        {(this.state.filteredData.length!=0)
        ?
        <div className="container">
            <div className="sidebar">
          <Button
            variant="raised"
            color="primary"
            value="T-shirts"
            onClick={() => filterCategory("shirt")}
          >
            T-shirts
          </Button>
          <Button
            variant="raised"
            color="primary"
            value="Jeans"
            onClick={() => filterCategory("pant")}
          >
            Jeans
          </Button>

          <Button
            variant="raised"
            color="primary"
            value="Shoes"
            onClick={() => filterCategory("shoe")}
          >
            Shoes
          </Button>
          <Button
            variant="raised"
            color="primary"
            value="Watch"
            onClick={() => filterCategory("accessory")}
          >
            Accessory
          </Button>

          <Button
            variant="raised"
            color="primary"
            value="All"
            onClick={() => filterCategory(null)}
          >
            All
          </Button>
        </div>
           { filtered }
           <div className="footer">footer component here</div>
        </div>
          :
          <div className="container">
          <div className="sidebar">
          <Button
            variant="raised"
            color="primary"
            value="T-shirts"
            onClick={() => filterCategory("shirt")}
          >
            T-shirts
          </Button>
          <Button
            variant="raised"
            color="primary"
            value="Jeans"
            onClick={() => filterCategory("pant")}
          >
            Jeans
          </Button>

          <Button
            variant="raised"
            color="primary"
            value="Shoes"
            onClick={() => filterCategory("shoe")}
          >
            Shoes
          </Button>
          <Button
            variant="raised"
            color="primary"
            value="Watch"
            onClick={() => filterCategory("accessory")}
          >
            Accessory
          </Button>
        </div>
           { products }
           <div className="footer">footer component here</div>
          </div>
        }
     </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    product: state.product,
    reducedDataItems: state.reducedDataItems
  };
};
export default connect(mapStateToProps, {
  getProducts,
  getProduct,
  reducedData
})(Shop);
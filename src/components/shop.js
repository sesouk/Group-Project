import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import {getProducts, getProduct, actions, reducedData } from "../ducks/reducer";
import "../Styling/shop.css";
import TabsData from "./TabsData";
import ItemList from "./ItemList";

class Shop extends Component {
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
    //   const groupBy = (arrObj, property) => {
    //     return arrObj.reduce((acc, obj) => {
    //       const key = obj[property]
    //       if (!acc[key]) {
    //       acc[key] = []
    //       console.log(acc[key]);
    //       console.log(acc);
    //     }
    //       acc[key].push({ name: obj.productname, details: obj})
    //       return acc
    //   }, [])
    // }
    // const reduced = groupBy(this.props.products, 'productname')
    // console.log('---------products',this.props.products)
    // console.log('---------productid', this.props.cart[0])
    // console.log('---------products',this.props.products)
    // console.log('---------productid', this.props.cart)
    // console.log('---------cart.productID', this.props.cart.findIndex(e => e.id))
    // console.log('---------this.props.cart-------', this.props.cart)
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
    this.props.reducedData(reduced);


    // const products = reduced.map((e,i) => {
    //   // console.log(e.products[0].productimage);
    //   // const productsnested = e.products.map((el,i) => {
    //   //   // console.log(el.productprice);
    //     return <div key={i} className='item'>
    //     <div className='item-contain'>
    //           <p>{e.name}</p>
    //           <h2>{e.products[0].productcartdesc} </h2>
    //           <img src ={e.products[0].productimage} alt={e.products[0].productname}  />
    //           {/* <h3> {e.productcartdesc} </h3> */}
    //           <p>${e.products[0].productprice}</p>

    //           <p className='stock'>{e.products[0].productstock <=0 ? 'out-of-stock' : e.products[0].productstock >0 && e.products[0].productstock <= 10 ? 'limited-stock' : 'in-stock'}</p>
    //           <Link to='/product'><button onClick={() => this.props.getProduct({ name: e.products[0].productname, image: e.products[0].productimage, price: e.products[0].productprice, info: e.products[0].productcartdesc, subinfo: e.products[0].productshortdesc, details: e.products})}>Details</button></Link>
    //           </div>
    //          </div>
    //   })
    // console.log(productsnested);
    // return productsnested
    // })

    // console.log('----------e', e);
    // console.log('----------this.props.cart', this.props.cart);

    //       }): 'nothing to display'
    // { this.props.cart > 0 ? console.log( '---------productid', this.props.cart[0].productid : null) }
    // const products = [reduced].map((e,i) => {
    //   console.log('-------------',e);
    //   return <div>
    //     <p></p>
    //   </div>
    // })
    return (
      <div>
        {/* <TabsData  reduced={reduced} /> */}
        <div className ="tabs">
        <TabsData />
<br />
<br />
</div>

        {/* {this.props.reducedData(reduced)} */}
        <div className="">
          <div className="sidebar">sorting component would go here</div>
          {/* {products} */}
          {/* <ItemList reduced={this.props.reducedData} /> */}
          <div className="footer">footer component here</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    product: state.product
  };
};
export default connect(mapStateToProps, {
  getProducts,
  getProduct,
  reducedData
})(Shop);

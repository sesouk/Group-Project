import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCategoryProducts,
  getProducts,
  reducedData
} from "../ducks/reducer";
import Button from "@material-ui/core/Button";
// import {filterCategory} from './../utils/function'
import ItemList from "./ItemList";
import axios from "axios";
import '../Styling/shop.css'

class TabsData extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      products: [],
      filteredData: []
    };
  }
  componentDidMount() {
    const { reducedDataItems } = this.props.reducedDataItems;
    // console.log("============= current cart", this.props.reducedDataItems);
  }

  filterCategory = category => {
    // console.log("inside filter cat data", this.props.reducedDataItems);
    const reducedData = this.props.reducedDataItems.filter(
      item => item.category === category
    );
    // console.log("inside filter cat data", reducedData);
    //   this.props.reducedData(reducedData)
    this.setState({ filteredData: reducedData });
  };

  render() {
    const { reducedDataItems } = this.props.reducedDataItems;

    const { category } = this.state;

    return (
      <div>

        <div className="filter-data">
          <Button
            variant="raised"
            color="primary"
            value="T-shirts"
            onClick={() => this.filterCategory("shirt")}
          >
            T-shirts
          </Button>
          <Button
            variant="raised"
            color="primary"
            value="Jeans"
            onClick={() => this.filterCategory("pant")}
          >
            Jeans
          </Button>

          <Button
            variant="raised"
            color="primary"
            value="Shoes"
            onClick={() => this.filterCategory("shoe")}
          >
            Shoes
          </Button>
          <Button
            variant="raised"
            color="primary"
            value="Watch"
            onClick={() => this.filterCategory("accessory")}
          >
            Accessory
          </Button>
        </div>
        <div>

          <ItemList filteredData={this.state.filteredData} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    category_items: state.category_items,
    products: state.products,
    reducedDataItems: state.reducedDataItems
  };
};
export default connect(mapStateToProps, { getCategoryProducts, getProducts, reducedData })(TabsData);

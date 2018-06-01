import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/manisha11/image/upload";
const CLOUDINARY_UPLOAD_PRESET = "hdi8lbnt";
const CLOUDINARY_UPLOAD_PRESET_SIGNED = "StopNShop";

export default class NewProduct extends Component {
  constructor() {
    super();
    this.state = {
      productname: "",
      productprice: "",
      productcartdesc: "",
      productshortdesc: "",
      productimage: "",
      productstock: "",
      productsize: "",
      productcolor: "",
      productcategory: "",
      files: [],
    };

    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  clearForm() {
    this.setState({
      productname: '',
      productprice: '',
      productcartdesc: '',
      productshortdesc: '',
      productimage: '',
      productstock: '',
      productsize: '',
      productcolor: '',
      productcategory: '',
      uploadUrl:''
    });
    alert("Item created Successfully");
  }

  uploadImage(file) {
    console.log("inside uploadfile", file);
    axios.get("/api/upload").then(response => {
      console.log("response data", response.data);

      let formData = new FormData();
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      formData.append("file", file[0]);

      axios.post(CLOUDINARY_UPLOAD_URL, formData).then(response => {
        this.setState({ uploadUrl: response.data.secure_url });
        console.log("Image url is ", this.state.uploadUrl);
      });
    });
  }

  createProduct() {
  
      const {productname,productprice,productcartdesc,productshortdesc,uploadUrl,productstock,productsize,productcolor,productcategory} =this.state
      console.log("inside createprodcuct", this.state);
      axios.post("/api/createProduct", {productname,productprice,productcartdesc,productshortdesc,uploadUrl,productstock,productsize,productcolor,productcategory}).then(response => {
        if (response.data === "registered") {
          window.location = "/";
        }
      });

      this.clearForm();
    
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="box">
          <h1 className="">Enter the Details of Product</h1>
          <div>
            <label>Product Name</label>
            <input
            value={this.state.productname}
              type="text"
              placeholder="Enter the product name"
              onChange={e => this.setState({ productname: e.target.value })}
            />
          </div>

          <div>
            <label>Product Price</label>
            <input
              type="text"
              value={this.state.productprice}
              placeholder="Enter the product Price"
              onChange={e => this.setState({ productprice: e.target.value })}
            />
          </div>
          <div>
            <label>Product Description</label>
            <input
              type="text"
              value={this.state.productcartdesc}
              placeholder="Enter the product description"
              onChange={e => this.setState({ productcartdesc: e.target.value })}
            />
          </div>
          <div>
            <label>Product Short Description</label>
            <input
              type="text"
              value={this.state.productshortdesc}
              placeholder="Enter the product short description"
              onChange={e => this.setState({ productshortdesc: e.target.value })}
            />
          </div>
         
          <div>
            <label>Product Size</label>
            <input
              type="text"
              placeholder="Enter the product Size"
              value={this.state.productsize}
              onChange={e => this.setState({ productsize: e.target.value })}
            />
          </div>
          <div>
            <label>Product Color </label>
            <input
              type="text"
              placeholder="Enter the product color"
              value={this.state.productcolor}
              onChange={e => this.setState({ productcolor: e.target.value })}
            />
          </div>
          <div>
            <label>Product Category</label>
            <input
              type="text"
              placeholder="Enter the product Category"
              value={this.state.productcategory}
              onChange={e => this.setState({ productcategory: e.target.value })}
            />
          </div>
          <div>
            <label>Product Stock </label>
            <input
              type="text"
              placeholder="Enter the stock"
              value={this.state.productstock}
              onChange={e => this.setState({ productstock: e.target.value })}
            />
          </div>
          <div >
            <label>Product Image</label>
            <input
              type="file"
              onChange={e => this.setState({ productimage: e.target.files })}
            />
            <button
              className="btn btn-primary"
              onClick={() => this.uploadImage(this.state.productimage)}
            >
              {" "}
              Upload{" "}
            </button>
          </div>
          

          <Button variant="raised" color="primary" onClick={() => this.createProduct()}> Create Product </Button>
        </div>
      </div>
    );
  }
}


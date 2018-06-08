import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProduct, actions } from '../ducks/reducer'
import Popup from 'reactjs-popup'
import './../Styling/product.css'

class Product extends Component {
  constructor(){
	super()
		this.state = {
			size: '',
			color: '',
			id: null,
			colorOptions: [],
			checked: false,
			button: true
		}
}
  
filtered(size){
  this.props.product.details.map((e, i) => {
  if(e.productsize === size){
    const newArr = []
    newArr.push({color: e.productcolor, id: e.productid})
    this.setState({
      colorOptions: newArr
    })
  }
})}

sizerefresh(){
  const newColor = ''
  const newId = ''
  	this.setState({
      color: newColor,
      id: newId
  })
}

toggle = () => {
  if(this.state.checked && this.state.id){
    this.setState({
			checked: false,
			button: true
    })
  }
}

  render() {

    const {product} = this.props
    const {price} = this.props.product
    const reducedSize = this.props.product.price ? this.props.product.details.reduce((arr, current) => {
    	if(!arr.length) {
        arr.push(
          {
            name: current.productname, 
            id: current.productid, 
            size: current.productsize, 
            etc: [ current ]
          })
          return arr
          }
            let i = arr.findIndex(e => {
              return e.size === current.productsize
            })
            	if(i !== -1) {
              	arr[i].etc.push(current)
              	return arr
            } else {
              arr.push(
                {
                  name: current.productname, 
                  id: current.productid, 
                  size: current.productsize, 
                  etc: [ current ]
                })
              return arr
            }
          }, []): null

    const optionColors = this.state.size ? this.state.colorOptions.map((e, i) => {
      return <div key={i}>
      				<input onClick={() => this.setState({ checked: true, button: false })} 
                type="radio" id={e.id} name={e.name} checked={this.state.checked}
        				onChange={() => {
          			this.setState({ color: e.color, id: e.id })
        				}}/>
      				<label htmlFor={e.id}>{e.color}</label>
          	</div>
        }): null
		
		const optionSize = this.props.product.price ? reducedSize.map((e, i) => {
			return <div key={i}>
							<input type="radio" id={e.id} name={e.name} value={e.size}
								onChange={() => {
								this.filtered(e.size)    
								this.sizerefresh()
								this.toggle()
								this.setState({ size: e.size })
								}}/>
							<label htmlFor={e.id}>{e.size}</label>
						</div>
						}): null

  return (
    <div className='product-page'>
      { 
        price 
          ? (
            <div className='contain-pp'>
              <p>{product.name}</p>
              <img src={product.image} alt={product.name}/>
              <p>{product.info}</p>
              <p>${product.price}</p>
                <button disabled={this.state.button} 
                  onClick={
                    () => this.props.add(
                      {
                        name: product.name, 
                        id: this.state.id, 
                        color: this.state.color, 
                        size: this.state.size, 
                        qty: 1, 
                        image: product.image, 
                        price: product.price, 
                        total: product.price 
                      })
                      && this.props.cartTotal() 
                      && this.props.getCart()}
                    >
                    Buy it!
                </button>
                <p>Select a Size: </p>
                  {optionSize}
                { 
                  this.state.size 
                  ?
                  <div>
                    <p>Select a Color: </p>
                      {optionColors}
                  </div>
                  : 
                    null
                } 
            </div> 
                	) 
                		: ( 
                <div>Go pick an item!</div> 
              ) 
            }
      </div>
    )
  }    
}
const mapStateToProps = state => {
    return {
      product: state.product,
      cart: state.cart
    }
  }

const mapDispatchToProps = {
  getProduct,
  ...actions
}
  export default connect(mapStateToProps, mapDispatchToProps)(Product)

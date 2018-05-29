import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getProduct, addToCart, cartTotal, actions } from '../ducks/reducer'
import axios from 'axios'

class Product extends Component {
    constructor(){
    super()
    this.state = {
        size: '',
        color: '',
        id: null,
        colorOptions: [],
        checked: false
    }
}
  
filtered(size){
    this.props.product.details.map((e, i) => {
    console.log(this.state.size);
    console.log(e.productsize);
    console.log(this.props.product.details);
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
            checked: false
        })
    }
}
    render() {
        const {product} = this.props
        const {price} = this.props.product
        console.log(this.props.product)
        // const reducedColor = this.props.product.price ? this.props.product.details.reduce( (arr, current) => {
        //     // console.log(current)
        //     if(!arr.length) {
        //       // console.log('no length')
        //       arr.push({color: current.productcolor, name: current.productname, id: current.productid, size: current.productsize, size: current.productsize, etc: [ current ]})
        //       return arr
        //     }
        //     let i = arr.findIndex(e => {
        //       // console.log(e.name, current.productname)
        //       return e.color === current.productcolor
        //     })
        //     if(i !== -1) {
        //       // console.log('duplicate item')
        //       arr[i].etc.push(current)
        //       return arr
        //     } else {
        //       // console.log('new item')
        //       arr.push({color: current.productcolor, name: current.productname, id: current.productid, size: current.productsize, etc: [ current ]})
        //       return arr
        //     }
        //   }, []): null


          const reducedSize = this.props.product.price ? this.props.product.details.reduce( (arr, current) => {
            // console.log(current)
            if(!arr.length) {
              // console.log('no length')
              arr.push({name: current.productname, id: current.productid, size: current.productsize, etc: [ current ]})
              return arr
            }
            let i = arr.findIndex(e => {
              // console.log(e.name, current.productname)
              return e.size === current.productsize
            })
            if(i !== -1) {
              // console.log('duplicate item')
              arr[i].etc.push(current)
              return arr
            } else {
              // console.log('new item')
              arr.push({name: current.productname, id: current.productid, size: current.productsize, etc: [ current ]})
              return arr
            }
          }, []): null

        // console.log('============', this.props.product.name);
        // console.log('============', this.props.product.image);
        // console.log('============', this.props.product.subinfo);
        // console.log('============', this.props.product.info);
        // console.log('============', this.props.product.price);
        console.log('============= current color', this.state.colorOptions)
        // console.log('============= current size', reducedSize)
        const optionColors = this.state.size ? this.state.colorOptions.map((e, i) => {
            // console.log(e)
            return <div>
                    <input onClick={() => this.setState({checked: true})} type="radio" id={e.id} name={e.name} checked={this.state.checked}
                    onChange={() => {
                        this.setState({ color: e.color, id: e.id })
                    }}
                    />
                    <label for={e.id}>{e.color}</label>
                </div>
        }): null
        const optionSize = this.props.product.price ? reducedSize.map((e, i) => {
            // console.log(e)
            // console.log(this.state.size)
            return <div>
                    <input type="radio" id={e.id} name={e.name} value={e.size}
                    onChange={() => {
                    this.filtered(e.size)    
                    this.sizerefresh()
                    this.toggle()
                    this.setState({ size: e.size })
                    }}     
                    />
                    <label for={e.id}>{e.size}</label>
            </div>
        }): null

        return (
            <div>
            { 
                price 
                ? (
                    <div>
                        <p>{product.name}</p>
                        <img src={product.image} alt={product.name}/>
                        <p>{product.info}</p>
                        <p>${product.price}</p>
                        <button onClick={
                            () => this.props.addToCart({ name: product.name, id: this.state.id, color: this.state.color, size: this.state.size, qty: 1, image: product.image, price: product.price, total: product.price })
                            && this.props.cartTotal() 
                            && this.props.getCart()
                        }>
                            Buy it!
                        </button>
                        <p>Select a Size: {optionSize}</p>
                        { this.state.size ?
                        <p>Select a Color: {optionColors} </p>: <p>Pick a Size</p>} 
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
  export default connect(mapStateToProps, mapDispatchToProps /* {getProduct, addToCart, cartTotal} */)(Product)




//   e.details.map((el,i) => {
//     console.log(el)
//     return     
//         <div key={i}>
//         <p>{e.name}</p>
//         <img src={e.image} alt={e.subinfo}/>
//         <p>{e.info}</p>
//         <p>${e.price}</p>
        // <button onClick={
        //     () => this.props.addToCart({ name: e.name, id:e.id, qty: 1, image: e.image, price: e.price, total: e.price })
        //     && this.props.cartTotal() 
        //     && this.props.getCart()
        // }>Buy it!</button>
    //     <input type="checkbox" id={el.productid} name={el.productname} value={el.productsize}/>
    // <label for={el.productid}>{el.productsize}</label>
//         </div>     
// })

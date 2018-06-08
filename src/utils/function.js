const data = require ('./../utils/data.js')
const axios = require("axios");

module.exports={

  category: (productcategory) => {
    console.log("insdie category function************************");
    return data.filter(item => {
      return item.productcategory === productcategory;
    });
  },

  getOrders:(url)=> {
    return data.get(url).then(res => {
      return res.data;
    })
  },
  
    arrayToArrayofObject:(orders)=> {
     const result = {};
     orders.map(order => {
       if(result[order.orderid]) {
         result[order.orderid].products = [
           ...result[order.orderid].products,
           {
             id: order.productid,
             name: order.productname,
             quantity: order.quantity,
             image:order.productimage,
             price:order.productprice
           }
         ]
   
       } else {
         result[order.orderid] = {
             orderid:order.orderid,
           orderamount: order.orderamount,
           username: order.username,
           orderDate: order.orderdate,
           products: [
             
             {
               id: order.productid,
               name: order.productname,
               quantity: order.quantity,
               image:order.productimage,
               price:order.productprice
                
             }
           ]
         }
       }
     })
   
     return result;
   },
   filterIssueByUser: (issues,filterIssue) =>{
     console.log("insdide filter function")
    return issues.filter(issue => {
      return (
        issue.posted_by
          .toLowerCase()
          .indexOf(filterIssue.toLowerCase()) >= 0
      );
    });
  },

  myNewFunction :(orderArrayOfProductObj)=> {

  
    for(let key in orderArrayOfProductObj) {
      const obj = orderArrayOfProductObj[key];
      const products = obj.products;
  
    console.log(obj)
      }
    }

}



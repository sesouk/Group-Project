module.exports={
    filterCategory: (products,filterByCategory) =>{
        console.log("insdide filter function", filterByCategory, products)
     return  products.filter(item => item.productcategory  === filterByCategory)


       }
     }

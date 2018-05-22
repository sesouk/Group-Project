module.exports={
    filterCategory: (category_items,filterByCategory) =>{
        console.log("insdide filter function", filterByCategory, category_items)
     return  category_items.filter(item => item.categoryname === filterByCategory)


       }
     }

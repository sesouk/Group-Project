
module.exports ={
  createProduct:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        const {productname,productprice,productshortdesc, productstock}=req.body;
        dbInstance.createProduct(productname,productprice,productshortdesc, productstock).then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },
    
    
    getProducts:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.getProducts().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },

    optionByProductID:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        console.log(req.params);
        const id = req.params.id;
        dbInstance.optionByProductID([id]).then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },

    itemOptions:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.itemOption().then(options =>res.status(200).send(options))
        .catch(error =>console.log(error))
    },


    getCategoryData:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.itemByCategory().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },
    deleteProduct:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        console.log("parameters are",req.params);
        const productId=req.params.id;
        dbInstance.deleteProduct(productId).then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },


    updateProduct:(req,res,next)=>{
        const dbInstance = req.app.get('db')
       const {params,query} = req;
       console.log("params are", params)
       const {productprice,productname,productstock}=req.body;

       console.log(productprice,productname,productstock);
        dbInstance.updateProduct(params.id,productprice,productname,productstock).then(updatedProduct =>res.status(200).send(updatedProduct))
        .catch(error =>console.log(error))
    },
    getProduct:(req, res, next) => {
        const dbInstance = req.app.get('db')
        const productId=req.params.id
        dbInstance.getProductByID(productId).then(product => res.status(200).send(product))
        .catch(error =>console.log(error))
    }
}




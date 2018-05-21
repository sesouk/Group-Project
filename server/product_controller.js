
module.exports ={
  createProduct:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.createProduct().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },
    
    
    getProducts:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.getProducts().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },

    deleteProduct:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.deleteProduct().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },


    updateProduct:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.updateProduct().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },
}




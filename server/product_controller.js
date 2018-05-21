const dbInstance = re.app.get('db');
module.exports ={
       
    createProduct:(req,res,next)=>{
        dbInstance.createProduct().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },
    
    
    getProducts:(req,res,next)=>{
        dbInstance.getProducts().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },

    deleteProduct:(req,res,next)=>{
        dbInstance.deleteProduct().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },


    updateProduct:(req,res,next)=>{
        dbInstance.updateProduct().then(products =>res.status(200).send(products))
        .catch(error =>console.log(error))
    },
}




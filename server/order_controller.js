const dbInstance=req.app.get('db');
module.exports ={
    allOrders:(req,res,next) =>{
    //    const dbInstance=req.app.get('db');
       dbInstance.getOrders().then(orders=>res.status(200).send(orders))
       .catch(error=>console.log(error))
    },

    orderByUserId:(req,res,next)=>{
        dbInstance.orderByUserId().then(order=>res.status(200).send(order))
        .catch(error =>console.log(error))

    },
    
}
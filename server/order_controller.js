
module.exports ={

    addToLineItem: (req, res, next) => {
        console.log("insde line item endpoint")
        const{orderid}= req.body
        const{cart} = req.session.user
    console.log("inside line items,",cart)
        cart.map((e)=>{
        req.app.get('db').createLineItems(orderid,e.id,e.qty ).then(data=>res.status(200).send(data))
      })
          .catch(error =>(console.log(error))
          );
      },



    allOrders:(req,res,next) =>{
       const dbInstance=req.app.get('db');
       dbInstance.getOrders().then(orders=>res.status(200).send(orders))
       .catch(error=>console.log(error))
    },

    orderByUserId:(req,res,next)=>{
        const dbInstance = req.app.get('db')
        dbInstance.orderByUserId().then(order=>res.status(200).send(order))
        .catch(error =>console.log(error))

    },
    
}
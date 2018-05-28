
module.exports ={

    // createOrder:(req,res)=>{
    //     const dbInstance = req.app.get('db');
    //     const{userID,total} = req.session;
    //     const{email,address,city,state,zip_code,phone,shippingCharges,tax} = req.body
    //     const date = new Date().toDateString()
    //     dbInstance.createOrder[(orderuserid,orderamount,ordershipaddress,ordercity,orderstate,orderzip,orderphone,ordershipping,ordertax,orderemail	,orderdate)]
    //     .then(order=>res.status(200).send(order))
    //     .catch(error =>console.log("not able to create order",issue));
    // },



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
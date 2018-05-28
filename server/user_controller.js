
module.exports = {
    cart: ( req, res ) => {
      const dbInstance = req.app.get('db')
      req.session.user.cart = req.body
      dbInstance.save_cart(JSON.stringify(req.session.user.cart))
        .then( cart => res.status(200).send(cart))
          .catch( err => console.log( err ))
      // dbInstance.save_cart()
    },
    getUser: (req, res) => {
      console.log(req.session.user)
      res.status(200).send(req.session.user)
    },
    getUsers: (req,res,next) =>{
        const dbInstance = req.app.get('db');
        // console.log('received request')
        dbInstance.getUsers().then(users=> res.status(200).send(users))
        .catch(error => console.log(error));
    },
    getUserByID: (req,res) =>{
        const dbInstance = req.app.get('db');
        console.log('received request',req.params)
        const userId = req.params.id;
        
        dbInstance.getUserByID(userId).then(user=> res.status(200).send(user))
        .catch(error => console.log(error));
    },

    register: (req,res) =>{
        const dbInstance = req.app.get('db');
        console.log('received request',req.params)
        const userId = req.params.id;
        
        dbInstance.getUserByID(userId).then(user=> res.status(200).send(user))
        .catch(error => console.log(error));
    }
}

// users: #    userid    username    useremail    usercity    userstate    userzip    userphone    useraddress
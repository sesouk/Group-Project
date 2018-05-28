
module.exports = {
    cartToRedux: ( req, res ) => {
      console.log('---cartToRedux-----req.body----', req.body)
      req.session.user.cart[0] ? 
      res.status( 201 ).send(req.session.user.cart) : res.status( 404 ).send("No current Cart in Session")
    },

    cartToSession: ( req, res ) => {
      // console.log('-----cartToSession-----req.body--', req.body)
      // console.log('-----req.session.user.cart----', req.session.user.cart)
      req.session.user.cart = req.body
      res.end()
    },
    getUser: (req, res) => {
      // console.log(req.session.user)
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
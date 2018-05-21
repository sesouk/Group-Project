
module.exports = {
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